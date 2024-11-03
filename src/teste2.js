import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const M3UApp = () => {
  const [items, setItems] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);

  // Função para processar o arquivo M3U
  const handleM3UFile = async (file) => {
    const content = await file.text();
    const parsedItems = parseM3U(content);
    setItems(parsedItems);
  };

  // Função de parse do M3U
  const parseM3U = (content) => {
    const lines = content.split('\n');
    const result = [];
    let current = {};

    lines.forEach((line) => {
      if (line.startsWith('#EXTINF')) {
        current = {
          title: line.match(/,(.+)/)?.[1],
          logo: line.match(/tvg-logo="(.+?)"/)?.[1],
        };
      } else if (line && !line.startsWith('#')) {
        current.url = line;
        result.push(current);
      }
    });
    return result;
  };

  const handleItemClick = (url) => {
    fetch(url)
      .then((res) => {
        const contentType = res.headers.get("Content-Type");
        if (contentType && contentType.includes("application/vnd.apple.mpegurl")) {
          return res.text().then((content) => {
            setItems(parseM3U(content));
            setVideoUrl(null);
          });
        } else {
          // Não é um arquivo M3U; tratamos como vídeo
          setVideoUrl(url);
        }
      })
      .catch((error) => console.error('Erro ao carregar o link:', error));
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleM3UFile(e.target.files[0])} />
      <div>
        {items.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item.url)}>
            <img src={item.logo} alt={item.title} width="100" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      {videoUrl && <ReactPlayer url={videoUrl} controls />}
    </div>
  );
};

export default M3UApp;
import React, { useState, useEffect } from 'react';
import './App.css'; // Arquivo CSS para os estilos

// Função para buscar e processar o arquivo M3U
const fetchM3U = async () => {
  const url = 'https://proxy-server-3nlb.onrender.com/proxy?url=http://e.cmrt.in/p/978460358/473005646/ssiptv';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro ao carregar o arquivo M3U: ${response.statusText}`);
    }
    const text = await response.text();
    return parseM3U(text);
  } catch (error) {
    console.error('Falha ao buscar o arquivo M3U:', error);
    return [];
  }
};

// Função para fazer o parse do conteúdo M3U
const parseM3U = (content) => {
  const lines = content.split('\n');
  let items = [];
  let currentItem = {};

  lines.forEach((line) => {
    if (line.startsWith('#EXTINF')) {
      const titleMatch = line.match(/,(.*)$/);
      if (titleMatch) currentItem.title = titleMatch[1];

      const logoMatch = line.match(/tvg-logo="(.*?)"/);
      if (logoMatch) currentItem.tvgLogo = logoMatch[1];
    } else if (line.startsWith('#EXTBG')) {
      const bgMatch = line.match(/#EXTBG: (.*)/);
      if (bgMatch) currentItem.background = bgMatch[1];
    } else if (line.startsWith('http') || line.startsWith('/')) {
      currentItem.url = line.trim(); // Para evitar problemas de espaço extra
      items.push(currentItem);
      currentItem = {};
    }
  });

  // Ordenar os itens alfabeticamente pelo título
  return items.sort((a, b) => a.title.localeCompare(b.title));
};

const App2 = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentUrl, setCurrentUrl] = useState('http://e.cmrt.in/p/978460358/473005646/ssiptv');

  // Função para carregar o arquivo M3U ao iniciar
  useEffect(() => {
    const loadM3U = async () => {
      const parsedItems = await fetchM3U(currentUrl);
      setItems(parsedItems);
      setFilteredItems(parsedItems); // Inicialmente, exibe todos os itens
    };

    loadM3U();
  }, [currentUrl]);

  // Função para lidar com pesquisa
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  // Quando o usuário clica em um item
  const handleItemClick = (url) => {
    if (url.endsWith('.mp4')) {
      window.open(url, '_blank');
    } else {
      const nextUrl = url.startsWith('h') ? `https://proxy-server-3nlb.onrender.com/proxy?url=${url}` : url;
      setCurrentUrl(nextUrl);
    }
  };

  return (
    <div className="container">
      <h1>Playlist de Séries</h1>

      {/* Campo de pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="grid-container">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="grid-item"
            style={{ background: item.background || '#11609e' }}
          >
            {item.tvgLogo && (
              <img
                src={item.tvgLogo}
                alt={item.title}
                className="thumbnail"
                onClick={() => handleItemClick(item.url)}
              />
            )}
            <h2 onClick={() => handleItemClick(item.url)} className="title">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App2;

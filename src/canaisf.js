// src/App.js
import React, { useEffect, useState } from 'react';
import StreamList from './components/StreamList';
import VideoPlayer from './components/VideoPlayer1';
import './App.css';
import axios from 'axios';

function Canais() {
  const [streams, setStreams] = useState([]); // Lista de streams
  const [currentStream, setCurrentStream] = useState(''); // Stream selecionado

  // URL do arquivo M3U
  const m3uUrl = 'https://login-strimer.vercel.app/Litateste.m3u'; // URL do arquivo M3U

  // Função para buscar e analisar o arquivo M3U
  useEffect(() => {
    const fetchM3U = async () => {
      try {
        const response = await axios.get(m3uUrl);
        const content = response.data;
        const streamsData = parseM3U(content);
        console.log('Streams Extraídos:', streamsData); // Verificar os streams extraídos
        setStreams(streamsData);
      } catch (error) {
        console.error('Erro ao buscar ou parsear o arquivo M3U:', error);
      }
    };

    fetchM3U();
  }, [m3uUrl]);

  // Função para analisar o conteúdo M3U e extrair streams
  const parseM3U = (content) => {
    const lines = content.split('\n').map(line => line.trim()).filter(line => line !== '');
    const streamsList = [];

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('#EXTINF')) {
        const regex = /#EXTINF:-1\s+([^,]+),(.+)/;
        const match = lines[i].match(regex);
        if (match) {
          const attributesString = match[1];
          const name = match[2];

          const attrRegex = /(\w+)="([^"]+)"/g;
          let attrMatch;
          const attributes = {};
          while ((attrMatch = attrRegex.exec(attributesString)) !== null) {
            attributes[attrMatch[1]] = attrMatch[2];
          }

          const url = lines[i + 1] || '';

          streamsList.push({
            name: name,
            url: url,
            logo: attributes['tvg-logo'] || '',
            group: attributes['group-title'] || ''
          });
        }
      }
    }

    return streamsList;
  };

  // Função para selecionar um stream e atualizar o player
  const handleSelectStream = (url) => {
    console.log('Stream Selecionado:', url); // Verificar se a seleção foi correta
    setCurrentStream(url);
  };

  return (
    <div className="App">
      <h1>Reprodutor de Vídeo M3U</h1>
      <div className="container">
        {/* Componente de vídeo */}
        <VideoPlayer url={currentStream} />

        {/* Lista de streams */}
        <StreamList streams={streams} onSelect={handleSelectStream} />
      </div>
    </div>
  );
}

export default Canais;

// src/components/StreamList.js
import React from 'react';
import './StreamList.css'; // Estilo separado para a lista

const StreamList = ({ streams, onSelect }) => {
  return (
    <div className="stream-list">
      <h2>Streams Disponíveis</h2>
      <ul>
        {streams.map((stream, index) => (
          <li key={index} onClick={() => onSelect(stream.url)}>
            {stream.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
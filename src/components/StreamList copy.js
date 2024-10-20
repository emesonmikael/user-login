
import './StreamList.css';
import React, { useRef, useEffect, useState } from 'react';


const StreamList = ({ streams, onSelect }) => {
 
  return (
    
    <div className="stream-list">
      <h2>Streams Disponíveis</h2>
      <ul>
        {streams.map((stream, index) => (
          <li key={index} onClick={() => onSelect(stream.url)}>
            {stream.logo && (
              <img 
                src={stream.logo} 
                alt={`${stream.name} logo`} 
                className="stream-logo" 
              />
            )}
            <span>{stream.name}</span>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default StreamList;
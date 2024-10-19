// src/components/VideoPlayer.js
import React, { useRef, useEffect, useState } from 'react';
import Hls from 'hls.js';
import './VideoPlayer.css';

const VideoPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é dispositivo móvel ou tela pequena
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Verifica ao carregar o componente
    window.addEventListener('resize', checkMobile); // Monitora mudanças no tamanho da janela

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let hls;

    if (url && Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });
    } else if (url && videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = url;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play();
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [url]);

  return (
    <div
      className="container"
      style={{ flexDirection: isMobile ? 'column' : 'row' }} // Define a orientação dinâmica
    >
      {isMobile && (
        <div className="video-player">
          {url ? (
            <video ref={videoRef} controls autoPlay />
          ) : (
            <p>Selecione um stream para reproduzir</p>
          )}
        </div>
      )}

      <div className="stream-list">
        <h2>Streams Disponíveis</h2>
        <ul>
          <li>A&E FHD</li>
          <li>A&E FHD H.265</li>
          <li>A&E HD</li>
        </ul>
      </div>

      {!isMobile && (
        <div className="video-player">
          {url ? (
            <video ref={videoRef} controls autoPlay />
          ) : (
            <p>Selecione um stream para reproduzir</p>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
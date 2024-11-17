import React, { useRef, useState } from 'react';

function PSPEmulator() {
  const [gameFile, setGameFile] = useState(null);
  const iframeRef = useRef();

  const loadGame = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setGameFile(url);
    }
  };

  const startEmulator = () => {
    if (iframeRef.current && gameFile) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'loadGame', url: gameFile },
        '*'
      );
    }
  };

  return (
    <div>
      <h1>PSP Emulator</h1>
      <input type="file" accept=".iso" onChange={loadGame} />
      <button onClick={startEmulator} disabled={!gameFile}>
        Start Game
      </button>
      <iframe
        ref={iframeRef}
        src="/path-to-ppsspp-web/index.html"
        title="PSP Emulator"
        width="800"
        height="600"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}

export default PSPEmulator;
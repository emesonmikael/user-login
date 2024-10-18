// src/pages/Home.js

import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState,useContext } from 'react';

const Home = () => {
    const { username, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    const [channels, setChannels] = useState([]);
    
    useEffect(() => {
      // Carrega e processa o arquivo .m3u
      fetch('/lista.m3u') // Certifique-se de que o arquivo .m3u está na pasta public
        .then(response => response.text())
        .then(data => {
          const lines = data.split('\n');
          const parsedChannels = [];
  
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('#EXTINF')) {
              const logoMatch = lines[i].match(/tvg-logo="(.*?)"/);
              const nameMatch = lines[i].split(',')[1];
  
              if (logoMatch && nameMatch) {
                const tvgLogo = logoMatch[1];
                const name = nameMatch.trim().replace(/\s/g, ''); // Remove espaços para formar a rota
                const streamUrl = lines[i + 2]?.trim(); // O URL está duas linhas abaixo
                
                parsedChannels.push({ name, tvgLogo, streamUrl });
              }
            }
          }
  
          setChannels(parsedChannels);
        })
        .catch(error => console.error('Erro ao carregar o arquivo .m3u', error));
    }, []);
  
    const handleImageClick = (name) => {
      navigate(`/${name}`); // Redireciona para a rota com base no nome do canal
    };

    return (
        <div style={styles.container}>
            <h2>Bem-vindo, {username}!</h2>
            <p>Seu status de assinatura está ativo.</p>
            <button onClick={handleLogout} style={styles.button}>
                Logout
            </button>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {channels.map((channel, index) => (
        <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
          <img
            src={channel.tvgLogo}
            alt={channel.name}
            onClick={() => handleImageClick(channel.name)} // Ao clicar, usa o navigate para a rota com o nome do canal
            style={{ cursor: 'pointer', width: '150px', height: '150px', borderRadius: '10px' }}
          />
          <p>{channel.name}</p>
        </div>
      ))}
    </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '100px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'center'
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#dc3545',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer'
    }
};

export default Home;
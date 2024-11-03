const fs = require('fs');
const path = require('path');

// Caminho do arquivo M3U
const m3uFilePath = path.join(__dirname, 'Novelas.m3u');

// Função para normalizar o título para URLs (ex.: remover acentos, substituir espaços, etc.)
function normalizeTitle(title) {
    return title
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^a-zA-Z0-9\s]/g, '') // Remove caracteres especiais
        .replace(/\s+/g, '_'); // Substitui espaços por underscore
}

// Função principal para atualizar o arquivo
function updateM3ULinks() {
    fs.readFile(m3uFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        // Expressão regular para capturar linhas com título e link
        const updatedData = data.replace(/#EXTINF:-1[^\n],(.)\n(https?:\/\/[^\s]+)/g, (match, title) => {
            const normalizedTitle = normalizeTitle(title);
            // Novo link com o título
            const newLink = `https://login-strimer.vercel.app/novelas/${normalizedTitle}.m3u`;
            return `#EXTINF:-1,${title}\n${newLink}`;
        });

        // Grava as alterações no arquivo M3U
        fs.writeFile(m3uFilePath, updatedData, 'utf8', (err) => {
            if (err) {
                console.error('Erro ao gravar o arquivo:', err);
                return;
            }
            console.log('Arquivo atualizado com sucesso!');
        });
    });
}

// Executa a atualização
updateM3ULinks();
const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Função para baixar e salvar o arquivo M3U
async function downloadM3U(url, title) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const fileName = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.m3u`;
        fs.writeFileSync(fileName, response.data);
        console.log(`Arquivo salvo como: ${fileName}`);
    } catch (error) {
        console.error(`Erro ao baixar o arquivo ${title}:`, error.message);
    }
}

// Função para processar o arquivo M3U principal
function processMainM3U(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n');

    let currentTitle = '';

    lines.forEach((line) => {
        if (line.startsWith('#EXTINF')) {
            const match = line.match(/,(.+)$/);
            if (match) {
                currentTitle = match[1].trim();
            }
        } else if (line.startsWith('http')) {
            downloadM3U(line.trim(), currentTitle);
        }
    });
}

// Caminho do arquivo M3U principal
const mainM3UPath = path.join(__dirname, 'Novelas.m3u');

// Processa o arquivo M3U e baixa os links
processMainM3U(mainM3UPath);
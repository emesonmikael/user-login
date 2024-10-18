// src/services/blockchain.js

import { ethers } from 'ethers';

// ABI do contrato UserRegistry (substitua pelo ABI real do seu contrato)
const CONTRACT_ABI = [
    {
        "inputs": [
            { "internalType": "string", "name": "_username", "type": "string" },
            { "internalType": "string", "name": "_password", "type": "string" }
        ],
        "name": "loginAndCheckSubscription",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    // ... inclua outras funções do contrato conforme necessário
];

// Endereço do contrato UserRegistry na BSC Testnet (substitua pelo seu)
const CONTRACT_ADDRESS = '0xcEF7A075009bBAdD02af48F6c9aDa232Bb6DDE9f';

// URL do nó público da BSC Testnet
const BSC_TESTNET_RPC_URL = 'https://data-seed-prebsc-1-s1.binance.org:8545/';

// Função para obter a instância do contrato com um provider
export const getContract = () => {
    const provider = new ethers.JsonRpcProvider(BSC_TESTNET_RPC_URL);
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
};

// Função para fazer login
export const loginUser = async (username, password) => {
    try {
        const contract = getContract();
        const isActive = await contract.loginAndCheckSubscription(username, password);
        return { success: true, isActive };
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return { success: false, message: error.message };
    }
};
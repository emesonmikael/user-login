// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

// Criar o contexto
export const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    // Função para login
    const login = (user) => {
        setIsAuthenticated(true);
        setUsername(user);
        // Salvar no localStorage para persistência
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', user);
    };

    // Função para logout
    const logout = () => {
        setIsAuthenticated(false);
        setUsername('');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
    };

    // Verificar o estado de autenticação ao montar o componente
    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        const storedUsername = localStorage.getItem('username');
        if (authStatus === 'true' && storedUsername) {
            setIsAuthenticated(true);
            setUsername(storedUsername);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
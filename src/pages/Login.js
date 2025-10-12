// src/pages/Login.js

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/blockchain';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = async () => {
        if (!usernameInput || !passwordInput) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true);

        try {
            const response = await loginUser(usernameInput, passwordInput);
            if (response.success) {
                if (response.success)//response.isActive) 
                    {
                    login(usernameInput);
                    navigate('/home');
                } else {
                    alert('Sua assinatura está inativa.');
                }
            } else {
                alert(`Erro: ${response.message}`);
            }
        } catch (error) {
            console.error('Erro durante o login:', error);
            alert('Ocorreu um erro durante o login. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Nome de Usuário"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                style={styles.input}
            />
            <input
                type="password"
                placeholder="Senha"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleLogin} style={styles.button} disabled={loading}>
                {loading ? 'Entrando...' : 'Login'}
            </button>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: '100px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'center'
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#28a745',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer'
    }
};

export default Login;

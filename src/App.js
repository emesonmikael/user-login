// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import App2 from './Series'
import Canais from './canaisf';
import Filmes from './Filmes';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route 
                        path="/home" 
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        } 
                    />
                    <Route path="/FILMES" element={ <PrivateRoute ><Filmes /></PrivateRoute>} />
                    <Route path="/CANAIS" element={ <PrivateRoute >< Canais/></PrivateRoute>} />
                    <Route path="/Series" element={ <PrivateRoute ><App2/></PrivateRoute>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import App2 from './Series3'
import Canais from './canaisf';
import Filmes from './Filmes';
import M3UPlayer from './M3UPlayer';
import PlayerPage from './PlayerPage';
import M3UPlayerHbo from './M3UPlayer copy';
import M3UPlayerGloboplay from './Globoplay';
import M3UPlayerAmazonPrime from './amazon';
import M3UPlayerDisneyPlus from './DisneyPlus';
import M3UPlayerParamountPlus from './ParamountPlus';
import M3UPlayerMax from './Max';
import M3UPlayerClarovideo from './Clarovideo';
import M3UPlayerGooglePlayMovies from './GooglePlayMovies';
import M3UPlayerMGMChannel from './MGMChannel';
import M3UPlayerOldflix from './Oldflix';
import M3UPlayerNOW from './NOW';
import M3UPlayerVudu from './Vudu';
import M3UPlayerAMConDemand from './AMConDemand';
import M3UPlayerParamountPlusAppleTVChannel from './ParamountPlusAppleTVChannel';
import M3UPlayerUniverVideo from './UniverVideo';
import M3UPlayerNetflixbasicwithAds from './NetflixbasicwithAds';
import M3UPlayerOiPlay from './OiPlay';
import M3UPlayerLooke from './Looke';
import M3UPlayerFilmicca from './Filmicca';
import M3UPlayerLancamentos2024 from './Lancamentos2024';
import M3UPlayerLançamentos2022 from './Lançamentos2022'
import M3UPlayerLançamentos2023 from './Lançamentos2023';
import M3UPlayerGuerra from './Guerra';
import M3UPlayerMarvel from './Marvel';
import M3UPlayerFaroeste from './Faroeste';
import M3UPlayerTerror from './Terror';
import M3UPlayerFantasiaeFicção from './FantasiaeFicção';
import M3UPlayerDrama from './Drama';
import M3UPlayerComédia from './Comédia';
import M3UPlayerAnimes from './Animes';
import M3UPlayerInfantil from './Infantil';
import M3UPlayerAção from './Ação';
import M3UPlayerNacionais from './Nacionais';
import M3UPlayerRomance from './Romance';
import M3UPlayerSuspense from './Suspense';
import M3UPlayerDocumentarios from './Documentarios';
import M3UPlayerReligiosos from './Religiosos';

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
                     <Route
            path="/Netflix"
            element={
              <PrivateRoute ><M3UPlayer /> </PrivateRoute>}/>
                    <Route path="/FILMES" element={ <PrivateRoute ><Filmes /></PrivateRoute>} />
                    <Route path="/CANAIS" element={ <PrivateRoute >< Canais/></PrivateRoute>} />
                    <Route path="/Series" element={ <PrivateRoute ><App2/></PrivateRoute>} />
                    <Route path="/OiPlay" element={<PrivateRoute ><M3UPlayerOiPlay /></PrivateRoute>} />
                    
        
        <Route path="/HBOMax" element={<M3UPlayerHbo />} />
        <Route path="/Globoplay" element={<M3UPlayerGloboplay />} />
        <Route path="/DisneyPlus" element={<M3UPlayerDisneyPlus />} />
        <Route path="/AmazonPrimeVideo" element={<M3UPlayerAmazonPrime />} />
        <Route path="/ParamountPlus" element={<M3UPlayerParamountPlus />} />
        <Route path="/Max" element={<M3UPlayerMax />} />
        <Route path="/Clarovideo" element={<M3UPlayerClarovideo />} />
        <Route path="/GooglePlayMovies" element={<M3UPlayerGooglePlayMovies />} />
        <Route path="/MGMChannel" element={<M3UPlayerMGMChannel />} />
        <Route path="/Oldflix" element={<M3UPlayerOldflix />} />
        <Route path="/NOW" element={<M3UPlayerNOW />} />
        <Route path="/Vudu" element={<M3UPlayerVudu />} />
        <Route path="/AMConDemand" element={<M3UPlayerAMConDemand />} />
        <Route path="/ParamountPlusAppleTVChannel" element={<M3UPlayerParamountPlusAppleTVChannel />} />
        <Route path="/UniverVideo" element={<M3UPlayerUniverVideo />} />
        <Route path="/NetflixbasicwithAds" element={<M3UPlayerNetflixbasicwithAds />} />
        <Route path="/OiPlay" element={<M3UPlayerOiPlay />} />
        <Route path="/Looke" element={<M3UPlayerLooke />} />
        <Route path="/Filmicca" element={<M3UPlayerFilmicca />} />
        <Route path="/Lancamentos2024" element={<M3UPlayerLancamentos2024 />} />
        <Route path="/Marvel" element={<PrivateRoute ><M3UPlayerMarvel /></PrivateRoute>} />
        <Route path="/Guerra" element={<PrivateRoute ><M3UPlayerGuerra /></PrivateRoute>} />
        <Route path="/Terror" element={<PrivateRoute ><M3UPlayerTerror /></PrivateRoute>} />
        <Route path="/Faroeste" element={<PrivateRoute ><M3UPlayerFaroeste /></PrivateRoute>} />
        <Route path="/Lançamentos2023" element={<PrivateRoute ><M3UPlayerLançamentos2023 /></PrivateRoute>} />
        <Route path="/FantasiaeFicção" element={<PrivateRoute ><M3UPlayerFantasiaeFicção /></PrivateRoute>} />
        <Route path="/Drama" element={<PrivateRoute ><M3UPlayerDrama /></PrivateRoute>} />
        <Route path="/Comédia" element={<PrivateRoute ><M3UPlayerComédia /></PrivateRoute>} />
        <Route path="/Animes" element={<PrivateRoute ><M3UPlayerAnimes /></PrivateRoute>} />
        <Route path="/Infantil" element={<PrivateRoute ><M3UPlayerInfantil /></PrivateRoute>} />
        <Route path="/Ação" element={<PrivateRoute ><M3UPlayerAção /></PrivateRoute>} />
        <Route path="/Nacionais" element={<PrivateRoute ><M3UPlayerNacionais /></PrivateRoute>} />
        <Route path="/Romance" element={<PrivateRoute ><M3UPlayerRomance /></PrivateRoute>} />
        <Route path="/Suspense" element={<PrivateRoute ><M3UPlayerSuspense /></PrivateRoute>} />
        <Route path="/Documentarios" element={<PrivateRoute ><M3UPlayerDocumentarios/></PrivateRoute>} />
        <Route path="/Religiosos" element={<PrivateRoute ><M3UPlayerReligiosos /></PrivateRoute>} />
        <Route path="/Lançamentos2022" element={<PrivateRoute ><M3UPlayerLançamentos2022 /></PrivateRoute>} />

         <Route path="/Marvel/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Lançamentos2023/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Faroeste/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Terror/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/FantasiaeFicção/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Drama/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Comédia/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Animes/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Infantil/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Ação/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Nacionais/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Romance/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Suspense/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Documentarios/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/Religiosos/player/:channelName" element={<PrivateRoute ><PlayerPage /></PrivateRoute>} />
        <Route path="/netflix/player/:channelName" element={<PlayerPage />} />
        <Route path="/Hbo/player/:channelName" element={<PlayerPage />} />
        <Route path="/Globo/player/:channelName" element={<PlayerPage />} />
        <Route path="/DisneyPlus/player/:channelName" element={<PlayerPage />} />
        <Route path="/AmazonPrime/player/:channelName" element={<PlayerPage />} />

        <Route path="/ParamountPlus/player/:channelName" element={<PlayerPage />} />
        <Route path="/Max/player/:channelName" element={<PlayerPage />} />
        <Route path="/Clarovideo/player/:channelName" element={<PlayerPage />} />
        <Route path="/GooglePlayMovies/player/:channelName" element={<PlayerPage/>} />

        <Route path="/MGMChannel/player/:channelName" element={<PlayerPage />} />
        <Route path="/Oldflix/player/:channelName" element={<PlayerPage  />} />

        <Route path="/NOW/player/:channelName" element={<PlayerPage  />} />
        <Route path="/Vudu/player/:channelName" element={<PlayerPage />} />
        <Route path="/AMConDemand/player/:channelName" element={<PlayerPage />} />
        <Route path="/ParamountPlusAppleTVChannel/player/:channelName" element={<PlayerPage  />} />
        <Route path="/UniverVideo/player/:channelName" element={<PlayerPage  />} />
        
        <Route path="/NetflixbasicwithAds/player/:channelName" element={<PlayerPage/>} />
        <Route path="/OiPlay/player/:channelName" element={<PlayerPage />} />
        <Route path="/Looke/player/:channelName" element={<PlayerPage />} />
        <Route path="/Filmicca/player/:channelName" element={<PlayerPage />} />
        <Route path="/Lancamentos2024/player/:channelName" element={<PlayerPage />} />
        <Route path="/Lancamentos2022/player/:channelName" element={<PlayerPage />} />
        <Route path="/Netflix/player/:channelName" element={<PlayerPage />} />
        <Route path="/OiPlay/player/:channelName" element={<PlayerPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;

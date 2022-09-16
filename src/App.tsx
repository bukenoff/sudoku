import React, { FC } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import GamePage from './containers/GamePage';
import StartPage from './containers/StartPage';
import ScoresPage from './containers/ScoresPage';
import { StoresProvider } from './stores/stores.provider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './styles/reset.css';
import './styles/global.css';

const App: FC = () => (
  <StoresProvider>
    <BrowserRouter>
      <main>
        <Navbar />
        <Route exact path="/" component={StartPage} />
        <Route path="/game/:difficulty" component={GamePage} />
        <Route path="/scores" component={ScoresPage} />
        <Footer />
      </main>
    </BrowserRouter>
  </StoresProvider>
);

export default App;

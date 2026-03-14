import React, { FC } from 'react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './styles/reset.css';
import './styles/global.css';

import GamePage from './containers/GamePage';

const App: FC = () => (
  <main>
    <Navbar />
    <GamePage />
    <Footer />
  </main>
);

export default App;

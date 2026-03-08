import React, { FC, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { StoresProvider } from './stores/stores.provider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './styles/reset.css';
import './styles/global.css';
import { HOME, GAME, SCORES } from './constants';

const GamePage = lazy(() => import('./containers/GamePage'));
const StartPage = lazy(() => import('./containers/StartPage'));
const ScoresPage = lazy(() => import('./containers/ScoresPage'));

const App: FC = () => (
  <StoresProvider>
    <Suspense fallback={<main>...loading</main>}>
      <BrowserRouter>
        <main>
          <Navbar />
          <Routes>
            <Route path={HOME} element={<StartPage />} />
            <Route path={GAME} element={<GamePage />} />
            <Route path={SCORES} element={<ScoresPage />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </Suspense>
  </StoresProvider>
);

export default App;

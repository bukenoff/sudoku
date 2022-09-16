import React, { FC, Suspense, lazy } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

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
          <Route exact path={HOME} component={StartPage} />
          <Route path={GAME} component={GamePage} />
          <Route path={SCORES} component={ScoresPage} />
          <Footer />
        </main>
      </BrowserRouter>
    </Suspense>
  </StoresProvider>
);

export default App;

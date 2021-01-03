import React, { FC } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import GamePage from './containers/GamePage';
import StartPage from './containers/StartPage';
import { StoresProvider } from './stores/stores.provider';

require('./styles/reset.css');
require('./styles/global.css');

const App: FC = () => (
  <StoresProvider>
    <BrowserRouter>
      <Route exact path="/" component={StartPage} />
      <Route path="/game" component={GamePage} />
    </BrowserRouter>
  </StoresProvider>
);

export default App;

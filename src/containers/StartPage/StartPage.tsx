import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const StartPage: FC = () => {
  return (
    <section>
      <Link to="/game">start game</Link>
    </section>
  );
};

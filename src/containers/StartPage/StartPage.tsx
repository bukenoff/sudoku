import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const StartPage: FC = () => {
  return (
    <Styled.Root>
      <Styled.StartButton>
        <Link to="/game">start game</Link>
      </Styled.StartButton>
    </Styled.Root>
  );
};

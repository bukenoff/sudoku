import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import * as Styled from './styles';

export const StartPage: FC<RouteComponentProps> = () => {
  return (
    <Styled.Root>
      <Styled.StartCta>start game</Styled.StartCta>
      <Styled.StartButton>
        <Link to="/game/easy">Easy</Link>
      </Styled.StartButton>
      <Styled.StartButton>
        <Link to="/game/medium">Medium</Link>
      </Styled.StartButton>
      <Styled.StartButton>
        <Link to="/game/hard">Hard</Link>
      </Styled.StartButton>
    </Styled.Root>
  );
};

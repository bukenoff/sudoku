import React, { FC } from 'react';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

export const Navbar: FC = () => {
  return (
    <Styled.Root>
      <Styled.HomeLink>
        <Link to="/">Sudoku</Link>
      </Styled.HomeLink>
      <div>contents</div>
    </Styled.Root>
  );
};

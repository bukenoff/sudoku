import React, { FC } from 'react';
import * as Styled from './styles';
import { Link, useLocation, NavLink } from 'react-router-dom';

export const Navbar: FC = () => {
  const { pathname } = useLocation();

  const is_game_page = pathname.includes('/game');

  return (
    <Styled.Root>
      <Styled.HomeLink>
        <Link to="/">Sudoku</Link>
      </Styled.HomeLink>
      <Styled.ScoresLink>
        <NavLink to="/scores" activeClassName="active">
          Best Scores
        </NavLink>
      </Styled.ScoresLink>
      {is_game_page && <div>contents</div>}
    </Styled.Root>
  );
};

import React, { FC } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { BiPause, BiRevision, BiX } from 'react-icons/bi';
import * as Styled from './styles';
import { useStores } from '~/stores/stores.provider';

export const Navbar: FC = () => {
  const { pathname } = useLocation();
  const {
    grid_store: { fetchGrid, clearGrid },
  } = useStores();

  const is_game_page = pathname.includes('/game');

  return (
    <Styled.Root>
      <Styled.HomeLink>
        <Link to="/">Sudoku</Link>
      </Styled.HomeLink>
      <Styled.RightPartWrapper>
        <Styled.ScoresLink>
          <NavLink to="/scores" activeClassName="active">
            Best Scores
          </NavLink>
        </Styled.ScoresLink>
        {is_game_page && (
          <Styled.GameActionsWrapper>
            <Styled.GameActionButton type="button" className="pause">
              <BiPause /> Pause
            </Styled.GameActionButton>
            <Styled.GameActionButton
              type="button"
              className="clear"
              onClick={clearGrid}
            >
              <BiX />
              Clear Grid
            </Styled.GameActionButton>
            <Styled.GameActionButton
              type="button"
              className="new_game"
              onClick={fetchGrid}
            >
              <BiRevision />
              New Game
            </Styled.GameActionButton>
          </Styled.GameActionsWrapper>
        )}
      </Styled.RightPartWrapper>
    </Styled.Root>
  );
};

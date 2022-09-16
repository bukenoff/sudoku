import React, { FC, useCallback, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { BiPause, BiRevision, BiX, BiPlay } from 'react-icons/bi';
import { observer } from 'mobx-react-lite';

import { useStores } from '~/stores/stores.provider';
import { HOME, SCORES } from '~/constants';

import * as Styled from './styles';

export const Navbar: FC = observer(() => {
  const { pathname } = useLocation();
  const {
    grid_store: { fetchGrid, clearGrid, mistakes_count, difficulty },
    timer_store: { is_paused, pause, unpause, time, reset },
  } = useStores();

  const is_game_page = pathname.includes('/game');

  const onPlayPauseClick = useCallback(() => {
    if (is_paused) {
      unpause();
      return;
    }

    pause();
  }, [is_paused, pause, unpause]);

  const startNewGame = useCallback(() => {
    !!difficulty && fetchGrid(difficulty);
  }, [difficulty]);

  useEffect(() => {
    if (is_game_page) return;
    reset();
  }, [is_game_page]);

  return (
    <Styled.Root>
      <Styled.HomeLink>
        <Link to={HOME}>Sudoku</Link>
      </Styled.HomeLink>
      <Styled.RightPartWrapper>
        <Styled.ScoresLink>
          <NavLink to={SCORES} activeClassName="active">
            Best Scores
          </NavLink>
        </Styled.ScoresLink>
        {is_game_page && (
          <>
            <span style={{ width: 80 }}>Time: {time}</span>
            <span>Mistakes made: {mistakes_count}</span>
            <Styled.GameActionsWrapper>
              <Styled.GameActionButton
                type="button"
                className="pause"
                onClick={onPlayPauseClick}
              >
                {is_paused ? (
                  <>
                    <BiPlay /> Play
                  </>
                ) : (
                  <>
                    <BiPause /> Pause
                  </>
                )}
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
                onClick={startNewGame}
              >
                <BiRevision />
                New Game
              </Styled.GameActionButton>
            </Styled.GameActionsWrapper>
          </>
        )}
      </Styled.RightPartWrapper>
    </Styled.Root>
  );
});

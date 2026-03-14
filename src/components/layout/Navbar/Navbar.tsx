import React, { FC, useEffect } from 'react';
import { BiPause, BiRevision, BiPlay } from 'react-icons/bi';

import * as Styled from './Navbar.styles';
import { useGrid, useTimer } from '~/stores';

export const Navbar: FC = () => {
  const grid_store = useGrid();
  const timer_store = useTimer();

  const is_game_page = true;

  const onPlayPauseClick = () => {
    if (timer_store.is_paused) {
      timer_store.unpause();
    } else {
      timer_store.pause();
    }
  };

  const startNewGame = () => {
    grid_store.fetchGrid();
  };

  useEffect(() => {
    if (is_game_page) return;
    timer_store.reset();
  }, [is_game_page]);

  return (
    <Styled.Root>
      <Styled.RightPartWrapper>
        {is_game_page && (
          <>
            <span style={{ width: 80 }}>Time: {timer_store.time}</span>
            <span>Mistakes made: {grid_store.mistakes_count}</span>
            <Styled.GameActionsWrapper>
              <Styled.GameActionButton
                type="button"
                className="pause"
                onClick={onPlayPauseClick}
              >
                {timer_store.is_paused ? (
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
};

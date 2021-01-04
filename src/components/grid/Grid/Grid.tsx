import React, { FC } from 'react';
import Block from '../Block';
import * as Styled from './styles';
import { IGrid } from '~/types';

interface Props {
  grid: IGrid;
}

export const Grid: FC<Props> = ({ grid }) => {
  return (
    <Styled.Root>
      {Object.entries(grid).map(([key, value]) => (
        <Block key={key} block={value} />
      ))}
    </Styled.Root>
  );
};

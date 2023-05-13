import React, { FC } from 'react';

import type { IGrid } from '~/types';

import Block from '../Block';
import * as Styled from './Grid.styles';

interface GridProps {
  grid: IGrid;
}

export const Grid: FC<GridProps> = ({ grid }) => (
  <Styled.Root>
    {Object.entries(grid).map(([key, value]) => (
      <Block key={key} block={value} />
    ))}
  </Styled.Root>
);

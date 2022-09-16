import React, { FC } from 'react';

import type { IGrid } from '~/types';

import Block from '../Block';
import * as Styled from './styles';

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

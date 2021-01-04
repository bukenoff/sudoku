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
      {Object.values(grid).map((block) => (
        <Block key={block} block={block} />
      ))}
    </Styled.Root>
  );
};

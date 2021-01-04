import React, { FC } from 'react';
import Cell from '../Cell';
import * as Styled from './styles';
import { IBlock } from '~/types';
export interface IBlockProps {
  block: IBlock;
}

export const Block: FC<IBlockProps> = ({ block }) => {
  return (
    <Styled.Root>
      {Object.values(block).map(({ id, value, is_resolved }) => (
        <Cell key={id} is_resolved={is_resolved} value={value} />
      ))}
    </Styled.Root>
  );
};

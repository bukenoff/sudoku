import React, { FC } from 'react';
import Cell from '../Cell';
import * as Styled from './styles';

export const block_mock = [
  {
    id: '0',
    value: 1,
    is_resolved: true,
  },
  {
    id: '1',
    value: 3,
    is_resolved: false,
  },
  {
    id: '2',
    value: 5,
    is_resolved: false,
  },
  {
    id: '3',
    value: 2,
    is_resolved: true,
  },
  {
    id: '4',
    value: 8,
    is_resolved: true,
  },
  {
    id: '5',
    value: 4,
    is_resolved: false,
  },
  {
    id: '6',
    value: 6,
    is_resolved: false,
  },
  {
    id: '7',
    value: 9,
    is_resolved: true,
  },
  {
    id: '8',
    value: 7,
    is_resolved: true,
  },
];

export interface IBlockProps {
  block: Array<{ id: string; value: number; is_resolved: boolean }>;
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

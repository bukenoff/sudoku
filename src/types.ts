export type CellIndexType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface ICell {
  id: string;
  value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  is_resolved: boolean;
  is_value_guessed: boolean;
  guessed_value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  block_index: CellIndexType;
  cell_index: CellIndexType;
}

export interface IBlock {
  1: ICell;
  2: ICell;
  3: ICell;
  4: ICell;
  5: ICell;
  6: ICell;
  7: ICell;
  8: ICell;
  9: ICell;
}

export interface IGrid {
  1: IBlock;
  2: IBlock;
  3: IBlock;
  4: IBlock;
  5: IBlock;
  6: IBlock;
  7: IBlock;
  8: IBlock;
  9: IBlock;
}

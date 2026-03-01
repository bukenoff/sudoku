export const SUDOKU_MATRIX_MOCK = [
  [4, 3, 5, 6, 8, 2, 1, 9, 7],
  [2, 6, 9, 5, 7, 1, 8, 3, 4],
  [7, 8, 1, 4, 9, 3, 5, 6, 2],
  [8, 2, 6, 3, 7, 4, 9, 5, 1],
  [1, 9, 5, 6, 8, 2, 7, 4, 3],
  [3, 4, 7, 9, 1, 5, 6, 2, 8],
  [5, 1, 9, 2, 4, 8, 7, 6, 3],
  [3, 2, 6, 9, 5, 7, 4, 1, 8],
  [8, 7, 4, 1, 3, 6, 2, 5, 9],
];

export default class SudokuSolver {
  block_length = 3;
  row_length = 9;
  rows: number[][];
  cols: number[][];
  blocks: number[][];
  is_solved = false;
  board: (number | null)[][];

  constructor(board: (number | null)[][]) {
    this.rows = Array.from({ length: this.row_length }, () =>
      Array(this.row_length + 1).fill(0),
    );
    this.cols = Array.from({ length: this.row_length }, () =>
      Array(this.row_length + 1).fill(0),
    );
    this.blocks = Array.from({ length: this.row_length }, () =>
      Array(this.row_length + 1).fill(0),
    );
    this.board = board;
  }

  couldPlace(digit: number, row: number, col: number): boolean {
    const index =
      Math.floor(row / this.block_length) * this.block_length +
      Math.floor(col / this.block_length);

    return (
      this.rows[row][digit] +
        this.cols[col][digit] +
        this.blocks[index][digit] ===
      0
    );
  }

  placeNumber(digit: number, row: number, col: number): void {
    const index =
      Math.floor(row / this.block_length) * this.block_length +
      Math.floor(col / this.block_length);
    this.rows[row][digit]++;
    this.cols[col][digit]++;
    this.blocks[index][digit]++;
    this.board[row][col] = digit;
  }

  removeNumber(digit: number, row: number, col: number): void {
    const index =
      Math.floor(row / this.block_length) * this.block_length +
      Math.floor(col / this.block_length);
    this.rows[row][digit]--;
    this.cols[col][digit]--;
    this.blocks[index][digit]--;
    this.board[row][col] = null;
  }

  placeNextNumbers(row: number, col: number): void {
    if (row === this.row_length - 1 && col === this.row_length - 1) {
      this.is_solved = true;
    } else if (col === this.row_length - 1) {
      this.backtrack(row + 1, 0);
    } else {
      this.backtrack(row, col + 1);
    }
  }

  pickRandomDigits(): number[] {
    const randomIndex = Math.floor(Math.random() * SUDOKU_MATRIX_MOCK.length);
    return SUDOKU_MATRIX_MOCK[randomIndex];
  }

  backtrack(row: number, col: number): void {
    const randomDigits = this.pickRandomDigits();
    if (this.board[row][col] === null) {
      for (let i = 0; i < 9; i++) {
        const digit = randomDigits[i];
        if (this.couldPlace(digit, row, col)) {
          this.placeNumber(digit, row, col);
          this.placeNextNumbers(row, col);
          if (!this.is_solved) this.removeNumber(digit, row, col);
        }
      }
    } else {
      this.placeNextNumbers(row, col);
    }
  }

  solve(): void {
    for (let i = 0; i < this.row_length; i++) {
      for (let j = 0; j < this.row_length; j++) {
        if (this.board[i][j] === null) {
          return;
        }
        this.placeNumber(this.board[i][j] as number, i, j);
      }
    }

    this.backtrack(0, 0);
  }

  toBlocks(): number[][] {
    const blocks: number[][] = Array.from(
      { length: this.row_length },
      () => [],
    );

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const blockIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

        blocks[blockIndex].push(this.board[r][c] as number);
      }
    }

    return blocks;
  }
}

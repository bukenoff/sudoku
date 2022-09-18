import styled from 'styled-components';

const getColorBasedOnValue = (
  is_resolved: boolean,
  value: number | ' ',
  guessed_value: number,
): 'black' | 'red' => {
  if (is_resolved) return 'black';

  if (value !== guessed_value) {
    return 'red';
  }

  return 'black';
};

interface RootProps {
  is_resolved: boolean;
  value: number | ' ';
  guessed_value: number;
  is_selected: boolean;
}

export const Root = styled.li<RootProps>`
  list-style: none;
  display: inline-flex;
  border: ${({ is_selected }) =>
    is_selected ? '3px solid var(--pearly-purple)' : '1px solid black'};
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  user-select: none;
  background-color: ${({ is_resolved }) => (is_resolved ? '#efefef' : 'white')};

  & span[data-testid='cell_value'] input {
    outline: none;
    cursor: pointer;
    caret-color: transparent;
    width: 32px;
    margin: 0;
    padding: 0;
    border: none;
    display: inline;
    background: transparent;
    text-align: center;

    color: ${({ is_resolved, value, guessed_value }) =>
      getColorBasedOnValue(is_resolved, value, guessed_value)};
  }
`;

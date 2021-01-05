import styled from 'styled-components';

export const Root = styled.nav`
  flex: 0 0 40px;
  background-color: var(--asparagus);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-size: 1.1rem;
`;

export const RightPartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeLink = styled.span`
  & a {
    color: black;
    text-decoration: none;
  }
`;

export const ScoresLink = styled.span`
  margin-right: 0.5rem;

  & a {
    color: black;
    text-decoration: none;

    &.active {
      color: white;
    }
  }
`;

export const GameActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100px;
  height: 20px;
  margin: 0 0.25rem;
  cursor: pointer;
  outline: none;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.9);
  }

  &.pause {
    background-color: var(--steel-blue);
  }

  &.clear {
    background-color: var(--pearly-purple);
  }

  &.new_game {
    background-color: var(--snow);
  }
`;

export const GameActionsWrapper = styled.div`
  display: flex;
`;

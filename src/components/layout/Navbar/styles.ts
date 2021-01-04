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

export const HomeLink = styled.span`
  & a {
    color: black;
    text-decoration: none;
  }
`;

export const ScoresLink = styled.span`
  & a {
    color: black;
    text-decoration: none;

    &.active {
      color: white;
    }
  }
`;

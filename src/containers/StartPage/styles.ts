import styled from 'styled-components';

export const Root = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StartButton = styled.button`
  background-color: var(--steel-blue);
  border: none;
  padding: 0.75rem 1.75rem;
  cursor: pointer;

  & a {
    color: white;
    font-size: 18px;
    text-decoration: none;
    font-family: 'Lobster Two', cursive;
    text-transform: capitalize;
  }
`;

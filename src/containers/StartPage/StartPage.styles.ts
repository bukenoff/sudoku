import styled from 'styled-components';

export const Root = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StartButton = styled.button`
  background-color: var(--steel-blue);
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  height: 45px;
  width: 90px;
  margin: 0.25rem 0;

  & a {
    text-align: center;
    color: white;
    font-size: 18px;
    text-decoration: none;
    font-family: 'Lobster Two', cursive;
    text-transform: capitalize;
  }
`;

export const StartCta = styled.div`
  color: white;
  text-transform: capitalize;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

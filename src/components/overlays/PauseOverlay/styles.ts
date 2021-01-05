import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  from {
    box-shadow: 0 0 20px #ccc;
  }
  to {
    box-shadow: 0 0 30px #fff, 0 0 10px #fff;
  }
`;

export const Root = styled.div`
  background: white;
  z-index: 100;
  position: absolute;
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  animation: ${glow} 1s ease-in-out infinite alternate;
`;

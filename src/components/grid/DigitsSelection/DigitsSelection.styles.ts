import styled from 'styled-components';

export const Root = styled.div`
  height: 90px;
  width: 90px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: absolute;
  bottom: -100px;
  left: -30px;
  border: none;
  justify-content: space-between;
  align-items: stretch;
  user-select: none;
  z-index: 100;
  background-color: white;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.75);
`;

export const ArrowUp = styled.span`
  position: absolute;
  left: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: -6px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 5px solid black;
`;

export const DigitItem = styled.button`
  height: 28px;
  width: 28px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;
`;

export const ClearButton = styled.button`
  position: absolute;
  bottom: -17px;
  width: 100%;
  border: none;
  cursor: pointer;
  color: var(--snow);
  background-color: var(--pearly-purple);
`;

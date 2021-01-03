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
  border: 1px solid black;
  justify-content: space-between;
  align-items: stretch;
  user-select: none;
  z-index: 100;
  background-color: white;
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

export const DigitItem = styled.span`
  height: 28px;
  width: 28px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const ClearButton = styled.button`
  position: absolute;
  bottom: -19px;
  width: 100%;
  border: 1px solid black;
  cursor: pointer;
`;

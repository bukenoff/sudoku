import styled from 'styled-components';

export const Root = styled.li<{ is_resolved: boolean }>`
  list-style: none;
  display: inline-flex;
  border: 1px solid black;
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  user-select: none;
  background-color: ${({ is_resolved }) => (is_resolved ? '#efefef' : 'white')};
`;

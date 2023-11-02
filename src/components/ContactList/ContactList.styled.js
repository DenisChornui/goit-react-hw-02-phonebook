import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 300px;
`;

export const StyledBtn = styled.button`
  min-height: 25px;
  border: 1px solid black;
  border-radius: 8px;
  color: black;
  float: right;
  font-weight: bold;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: blue;
  }
`;

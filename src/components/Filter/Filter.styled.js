import styled from 'styled-components';

export const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  border: 0.1px solid lightgray;
  font-size: 20px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px 2px lightblue;
  }
`;

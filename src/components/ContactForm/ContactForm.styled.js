import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 250px;
  margin-bottom: 30px;
  font-weight: 300;
  margin-right: auto;
  margin-left: auto;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  font-weight: 400;
`;

export const StyledBtn = styled.button`
  padding: 10px;
  min-width: 100px;
  min-height: 40px;
  border: 1px solid black;
  border-radius: 8px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: blue;
  }
`;

export const StyledField = styled(Field)`
  border: 0.1px solid lightgray;
  font-size: 20px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px 2px lightblue;
  }
`;

export const StyledErrMessage = styled(ErrorMessage)`
  color: red;
`;

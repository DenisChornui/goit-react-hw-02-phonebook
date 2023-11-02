import { StyledInput, StyledTitle } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <div>
      <StyledTitle>Find contacts by name</StyledTitle>
      <StyledInput
        type="string"
        name="filter"
        onChange={onChange}
      ></StyledInput>
    </div>
  );
};

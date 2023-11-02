import { nanoid } from 'nanoid';
import { StyledList, StyledBtn } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <StyledList>
      {items.map(item => (
        <li key={nanoid()}>
          {item.name}: {item.number}
          <StyledBtn type="button" onClick={() => onDelete(item.id)}>
            Delete
          </StyledBtn>
        </li>
      ))}
    </StyledList>
  );
};

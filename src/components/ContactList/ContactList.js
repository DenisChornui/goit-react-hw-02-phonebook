import { nanoid } from "nanoid";

export const ContactList = ({ items, onDelete }) => {
  return <ul>
    {items.map(item => (
<li key={nanoid()} >{item.name}: {item.number}
<button type="button" onClick={() => onDelete(item.id)}>Delete</button>
</li>
    ))}
  </ul>;
};

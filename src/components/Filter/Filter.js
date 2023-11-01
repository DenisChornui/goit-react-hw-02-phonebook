export const Filter = ({ onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="string" name="filter" onChange={onChange}></input>
    </div>
  );
};

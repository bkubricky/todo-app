function CheckListItem({ id, text, completed }) {
  return (
    <>
      <li>
        {text} <input type="checkbox" checked={completed} />
      </li>
    </>
  );
}
export default CheckListItem;

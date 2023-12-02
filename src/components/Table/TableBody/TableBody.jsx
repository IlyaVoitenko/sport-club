import TableBodyItem from "./TableBodyItem";

// eslint-disable-next-line react/prop-types
const TableBody = ({ list, page }) => {
  return (
    <tbody>
      {list.map((item, index) => (
        <TableBodyItem key={index} item={item} index={index} page={page} />
      ))}
    </tbody>
  );
};

export default TableBody;

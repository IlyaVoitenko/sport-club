import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ list, page }) => {
  return (
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg  h-screen w-screen">
      <table className="table w-full text-gray-300 border-separate space-y-6 text-sm">
        <TableHead list={list} page={page} />
        <TableBody list={list} page={page} />
      </table>
    </div>
  );
};

export default Table;

import { useNavigate } from "react-router-dom";
import { checkNavigateForTable } from "../../../../utils/helper";
import { useDispatch } from "react-redux";

const TableBodyItem = ({ index, item, page }) => {
  let itemFields = Object.keys(item).slice(0, 4);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => checkNavigateForTable(navigate, page, dispatch, item)}
      className={
        index % 2 === 0
          ? "border-b bg-gray-900 border-gray-700 text-left text-white"
          : "border-b bg-gray-700 border-gray-700 text-left text-white"
      }
    >
      {item &&
        itemFields.map((field, index) => {
          return (
            <th
              key={index}
              scope="row"
              className="px-6 py-2 font-medium text-white whitespace-nowrap dark:text-white my-8"
            >
              {item[field]}
            </th>
          );
        })}
    </tr>
  );
};

export default TableBodyItem;

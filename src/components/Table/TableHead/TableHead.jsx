import lodash from "lodash";

const TableHead = ({ list, page }) => {
  if (lodash.isEmpty(list)) return null;
  const fieldsList = Object.keys(...list).slice(0, 4);

  return (
    <thead className="text-xs text-gray-700 uppercase text-left bg-gray-200 dark:bg-neutral-900  dark:text-white">
      <tr>
        {fieldsList.map((item, index) => (
          <th scope="col" className="px-6 py-3 " key={index}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;

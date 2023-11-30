/* eslint-disable react/prop-types */
import ItemStuff from "./ItemStuff";
// eslint-disable-next-line react/prop-types
const ListStuff = ({ list }) => {
  const { Role } = list[0];
  console.log(list);
  return (
    <div className="flex flex-col  ">
      <p className="mt-2">{Role}</p>

      <div className="flex flex-row flex-wrap justify-start">
        {list.map((item, index) => (
          <ItemStuff key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ListStuff;

/* eslint-disable react/prop-types */
import ItemStuff from "./ItemStuff";
// eslint-disable-next-line react/prop-types
const ListStuff = ({ list }) => {
  const { Role } = list[0];
  return (
    <div className="flex flex-col  ">
      <div className=" border-b-2 ">
        <p className="mt-2 text-2xl uppercase">{Role}</p>
      </div>
      <div className="flex flex-row flex-wrap justify-start">
        {list.map((item, index) => (
          <ItemStuff key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ListStuff;

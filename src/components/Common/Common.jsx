import ListStuff from "./ListStuff";
import data from "../../data/Состав.json";

const Common = () => {
  const stuff = Object.groupBy(data, ({ Role }) => Role);
  const { goalkeeper, defender, striker } = stuff || {};
  return (
    <div className="flex  justify-center">
      <div className="w-[90%]  ">
        <ListStuff list={goalkeeper} />
        <ListStuff list={defender} />
        <ListStuff list={striker} />
      </div>
    </div>
  );
};

export default Common;

import ListStuff from "./ListStuff";
import data from "../../data/Состав.json";
import Header from "../Header";

const Common = () => {
  const stuff = Object.groupBy(data, ({ Role }) => Role);
  const { goalkeeper, defender, striker } = stuff || {};
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <img src="/naitian-tony-wang-OWTAri-Dg-M-unsplash.jpg" />
      <div className="flex  justify-center  ">
        <div className="w-[90%]">
          <ListStuff list={goalkeeper} />
          <ListStuff list={defender} />
          <ListStuff list={striker} />
        </div>
      </div>
    </div>
  );
};

export default Common;

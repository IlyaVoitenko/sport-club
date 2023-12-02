import Table from "../Table";
import data from "../../data/Состав.json";

const ListPlayers = () => {
  return <Table list={data} page={"PlatersPage"} />;
};

export default ListPlayers;

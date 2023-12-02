import Table from "../Table";
import data from "../../data/Состав.json";
import { useSelector } from "react-redux";
import { isCloseModalSelector } from "../../store/selectors";
import Modal from "../../components/Modal";

const ListPlayers = () => {
  const isModal = useSelector(isCloseModalSelector);
  return (
    <>
      {isModal ? <Modal /> : null}
      <Table list={data} page={"PlatersPage"} />
    </>
  );
};

export default ListPlayers;

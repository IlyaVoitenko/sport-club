import { useSelector } from "react-redux";
import BtnCloseModal from "./BtnCloseModal";
import { selectedPlayerSelector } from "../../store/selectors";

const Modal = () => {
  const player = useSelector(selectedPlayerSelector);
  const { Role, Name, Alias, Birthday, Stick_grip, Height, Weight, Country } =
    player;
  return (
    <div className="flex absolute w-screen h-screen  justify-center items-center text-white bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="bg-slate-800  rounded w-2/4">
        <BtnCloseModal />
        <div>
          <div className="pb-3 text-left pl-3">
            <p className="text-lg font-bold mb-2">Info about player</p>
            <p className="text-gray-400">Name: {Name}</p>
            <p className="text-gray-400">Birthday: {Birthday}</p>
            <p className="text-gray-400">Role: {Role}</p>
            <p className="text-gray-400">Alias: {Alias}</p>
            <p className="text-gray-400">Stick grip: {Stick_grip}</p>
            <p className="text-gray-400">Height: {Height}</p>
            <p className="text-gray-400">Weight: {Weight}</p>
            <p className="text-gray-400">Country: {Country}</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Modal;
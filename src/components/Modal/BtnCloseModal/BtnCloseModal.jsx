import { useDispatch } from "react-redux";
import { setIsCloseModal } from "../../../store/reducers/players";

const BtnCloseModal = () => {
  const dispatch = useDispatch();
  return (
    <div className=" flex justify-end">
      <button
        onClick={() => dispatch(setIsCloseModal(false))}
        type="button"
        className="text-white   bg-red-600 hover:bg-red-800 hover:text-gray-900 mt-1 mr-1 rounded-lg  w-8 h-8  inline-flex justify-center items-center "
        data-modal-hide="default-modal"
      >
        &times;
      </button>
    </div>
  );
};

export default BtnCloseModal;

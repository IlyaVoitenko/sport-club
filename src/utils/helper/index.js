import { roles } from "../../components/Common/ListStuff/constants";
import { setPlayer, setIsCloseModal } from "../../store/reducers/players";

export const translateFileRoles = (role) => {
  if (roles[role]) return roles[role];
};

export const checkNavigateForTable = (navigage, page, dispatch, item) => {
  console.log("checkNavigateForTable");
  if (page === "ChooseTeamPage") {
    return navigage("/players");
  }
  if (page === "PlatersPage") {
    console.log("PlatersPage");
    console.log(item);
    dispatch(setIsCloseModal(true));
    return dispatch(setPlayer(item));
  }
};

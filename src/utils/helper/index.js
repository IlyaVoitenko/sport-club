import { roles } from "../../components/Common/ListStuff/constants";
import { setPlayer, setIsCloseModal } from "../../store/reducers/players";

export const translateFileRoles = (role) => {
  if (roles[role]) return roles[role];
};

export const checkNavigateForTable = (navigage, page, dispatch, item) => {
  if (page === "ChooseTeamPage") {
    return navigage("/players");
  }
  if (page === "PlatersPage") {
    dispatch(setIsCloseModal(true));
    return dispatch(setPlayer(item));
  }
};

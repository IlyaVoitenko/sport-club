import { roles } from "../../components/Common/ListStuff/constants";

export const translateFileRoles = (role) => {
  if (roles[role]) return roles[role];
};

export const checkNavigateForTable = (navigage, page, dispatch, item) => {
  if (page === "ChooseTeamPage") {
    return navigage("/players");
  }
  if (page === "PlatersPage") {
    return console.log("PlatersPage");
  }
};

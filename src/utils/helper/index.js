import { roles } from "../../components/Common/ListStuff/constants";

export const translateFileRoles = (role) => {
  if (roles[role]) return roles[role];
};

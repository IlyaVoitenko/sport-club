import defaultAvatar from "../../../../assets/завантаження.jpeg";
import { translateFileRoles } from "../../../../utils/helper";
import style from "./style.module.css";

const ItemStuff = ({ item }) => {
  const { Role, Name, Alias, Birthday, Stick_grip, Height, Weight, Country } =
    item;

  return (
    <div className={`${style.card} ml-2 mr-2`}>
      <div className={style.firstContent}>
        <img className="h-full rounded-lg" src={defaultAvatar} />
      </div>
      <div className={style.secondContent}>
        <span>{Name}</span>
        <span>{translateFileRoles(Role)}</span>
        <span>{Alias}</span>
        <span>{Birthday}</span>
        <span>{Stick_grip}</span>
        <span>{Height}</span>
        <span>{Weight} кг</span>
        <span>{Country}</span>
      </div>
    </div>
  );
};

export default ItemStuff;

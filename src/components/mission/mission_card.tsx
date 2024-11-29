import AppIcon, { AppIcons } from "../ui/app_icon";
import classes from "./mission.module.scss";
import MissionContent from "./mission_content";

export default function MissionCard() {
  return (
    <div className={classes.card}>
      <AppIcon icon={AppIcons.economic} size={100} />
      <MissionContent />
    </div>
  );
}

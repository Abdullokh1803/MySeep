import classes from "./mission.module.scss";
import MissionTitle from "./mission_title";
import MissionText from "./mission_text";

export default function MissionContent() {
  return (
    <div className={classes.content}>
      <MissionTitle />
      <MissionText />
    </div>
  );
}

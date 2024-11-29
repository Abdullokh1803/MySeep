import classes from "./mission.module.scss";
import MissionCard from './mission_card';

export default function Mission() {
  return (
      <div className={classes.mission}>
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
      </div>
  );
}

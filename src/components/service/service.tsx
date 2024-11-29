import classes from './service.module.scss'
import ServiceCard from "./service_card";

export default function Service() {


  return (
    <div className={classes.service}>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
}


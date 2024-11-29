import Image from "next/image";
import { IImage } from "~/src/core/assets/i-image";
import OurMastersCardTitle from "./our_masters_card_title";
import OurMastersCardText from "./our_masters_card_text";
import Button from "../ui/button";
import classes from './our_masters.module.scss';

export default function OurMastersCard() {
  return (
    <div className={classes.ourCard}>
      <div className={`${classes.img}`}>
        <Image
          src={IImage.cardImg}
          alt={IImage.cardImg}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={classes.content}>
        <div className={classes.text}>
          <OurMastersCardTitle />
          <OurMastersCardText />
        </div>
        <Button className={classes.button}>Подробнее...</Button>
      </div>
    </div>
  );
}

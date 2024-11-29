import Image from 'next/image';
import { IImage } from '~/src/core/assets/i-image';
import { serviceDataTitles } from './service_title';
import classes from './service.module.scss';
import Button from '../ui/button';

export default function ServiceCard() {
  const title = serviceDataTitles[0]?.text || 'Default Title';

  return (
    <div className={classes.card}>
      <Image
        src={IImage.default}
        alt="IImage.default"
        layout="fill"
        objectFit="cover"
        className={classes.image}
      />
      <div className={`${classes.overlay} flex items-center `}>
        <h6 className={`${classes.title} w500f24`}>{title}</h6>
        <div>
          <Button className={classes.button}>Подробнее</Button>
        </div>
      </div>
    </div>
  );
}

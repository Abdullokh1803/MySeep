import { IImage } from '../../core/assets/i-image';
import Image from 'next/image';
import NewsEventsData from './news_events_date';
import NewsEventsTitle from './news_events_title';
import NewsEventsDescription from './news_events_description';
import classes from './news_events.module.scss';

export default function NewsEventsCards() {
  return (
    <div className={classes.newsEventsCards}>
      <div className={classes.imageWrapper}>
        <Image
          src={IImage.cardImg}
          layout="responsive" 
          width={16} 
          height={9}
          alt={IImage.cardImg}
          className={classes.image}
        />
      </div>
      <div className={classes.textWrapper}>
        <NewsEventsData />
        <NewsEventsTitle />
        <NewsEventsDescription />
      </div>
    </div>
  );
}

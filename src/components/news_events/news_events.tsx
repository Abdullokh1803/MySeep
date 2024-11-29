import NewsEventsCard from './news_events_card';
import classes from './news_events.module.scss';

export default function NewEvents() {
  return (
    <div className={classes.newEvents}>
      <NewsEventsCard />
      <NewsEventsCard />
    </div>
  );
}

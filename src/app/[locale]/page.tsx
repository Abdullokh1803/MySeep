"use client";
import classes from "./home.module.scss";
import Title from "./../../components/titles/title";
import NewEvents from "./../../components/news_events/news_events";
import OurMasters from "./../../components/our_masters/our_masters";
import Subtitle from "./../../components/titles/subtitle";
import Service from "./../../components/service/service";
import Subscription from "./../../components/subscription/subscription";
import Gallery from "./../../components/gallery/gallery";
import MembersAssociation from "./../../components/members_association/members_association";
import OurPartners from "./../../components/our_partners/our_partners";
import Contacts from "./../../components/contacts/contact";
import Button from "~/src/components/ui/button";
// import Header from '~/src/components/header/header';
// import dynamic from "next/dynamic";

export default function Home() {

  // const Mapbox = dynamic(() => import("./../../components/map/map"), { ssr: false });

  return (
    <div className={classes.home}>
      <div className="container">
        <section>
        <div className={classes.title}>
            <Title>Бизнес-ассоциация SEDEP</Title>
          </div>
        </section>
        <section>
          <div className={classes.title}>
            <Title>Новости и мероприятия</Title>
          </div>
          <NewEvents />
          <Button className={classes.btns}>Все новости</Button>
        </section>
      </div>
      <section>
        <div className={classes.title}>
          <Title>Наши мастера</Title>
          <Subtitle>
            В частности, понимание сути ресурсосберегающих технологий
            предопределяет высокую востребованность благоприятных перспектив.{" "}
          </Subtitle>
        </div>
        <OurMasters />
        <div className="container">
          <Button className={classes.btns}>Все мастера</Button>
        </div>
      </section>
      <div className="container">
        <section>
          <div className={classes.title}>
            <Title>Услуги</Title>
            <Subtitle>
              В частности, понимание сути ресурсосберегающих технологий
              предопределяет высокую востребованность благоприятных перспектив.
            </Subtitle>
          </div>
          <Service />
        </section>
        <section>
          <div className={classes.title}>
            <Title>Оформите подписку</Title>
            <Subtitle>
              В частности, понимание сути ресурсосберегающих технологий
              предопределяет высокую востребованность благоприятных перспектив.
            </Subtitle>
          </div>
          <Subscription />
        </section>
        <section>
          <div className={classes.title}>
            <Title>Галерея</Title>
          </div>
          <Gallery />
          <Button className={classes.btns}>Смотреть галерею</Button>
        </section>
        <section>
          <div className={classes.title}>
            <Title>Члены ассоциации</Title>
          </div>
          <MembersAssociation />
          <Button className={classes.btns}>Все члены ассоциации</Button>
        </section>
      </div>
      <section className={classes.partners}>
        <div className="container">
          <div className={classes.content}>
            <Title>Наши партнеры</Title>
            <OurPartners />
            <Button className={classes.btns}>Стать партнёром</Button>
          </div>
        </div>
      </section>
      <div className="container">
        <section>
          <div className={classes.title}>
            <Title>Контакты</Title>
          </div>
          <Contacts />
        </section>
        {/* <Mapbox /> */}
      </div>
    </div>
  );
}

// свою ветку cначала загрузить новый код гитлаб add, commit, push
// свою ветку cначала загрузить новый код гитлаб add, commit, push
// меня ждете merge
// обновить dev --> git pull origin dev

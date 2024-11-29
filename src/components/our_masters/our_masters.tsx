import classes from "./our_masters.module.scss";
import OurMastersCard from "./our_masters_card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OurMasters() {
  return (
    <div className={classes.ourMasters}>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Pagination]} 
        className={classes.swiper}
      >
        <SwiperSlide className={classes.cards}>
          <OurMastersCard />
        </SwiperSlide>
        <SwiperSlide className={classes.cards}>
          <OurMastersCard />
        </SwiperSlide>
        <SwiperSlide className={classes.cards}>
          <OurMastersCard />
        </SwiperSlide>
        <SwiperSlide className={classes.cards}>
          <OurMastersCard />
        </SwiperSlide>
        <SwiperSlide className={classes.cards}>
          <OurMastersCard />
        </SwiperSlide>
        <SwiperSlide className={classes.cards}>
          <OurMastersCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

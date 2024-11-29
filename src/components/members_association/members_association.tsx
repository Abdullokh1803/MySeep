import classes from "./members_association.module.scss";
import MembersAssociationCard from "./members_association_card";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MembersAssociation() {
  return (
    <>
      <div className={`flex justify-evenly  ${classes.membersAssociation}`}>
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1440: {
                slidesPerView: 4,
              spaceBetween: 10,
            }
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className={classes.swiper}
        >
          <SwiperSlide>
            <MembersAssociationCard />
          </SwiperSlide>
          <SwiperSlide>
            <MembersAssociationCard />
          </SwiperSlide>
          <SwiperSlide>
            <MembersAssociationCard />
          </SwiperSlide>
          <SwiperSlide>
            <MembersAssociationCard />
          </SwiperSlide>
          <SwiperSlide>
            <MembersAssociationCard />
          </SwiperSlide>
          <SwiperSlide>
            <MembersAssociationCard />
          </SwiperSlide>
          <SwiperSlide>
            <MembersAssociationCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

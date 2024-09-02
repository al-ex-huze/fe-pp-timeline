// // import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "../../styles/CarouselContent.css";

// import {
//     Autoplay,
//     EffectCoverflow,
//     Navigation,
//     Pagination,
// } from "swiper/modules";
// import { Link } from "react-router-dom";
// // import { Link } from "react-router-dom";

// const CarouselContent = ({ timelinesData }: { timelinesData: any }) => {
//     return (
//         <div className="Content__Carousel">
//             <Swiper
//                 // cssMode={true}
//                 speed={100}
//                 spaceBetween={50}
//                 // effect={"coverflow"}
//                 grabCursor={true}
//                 centeredSlides={false}
//                 slidesPerView={2}
//                 // coverflowEffect={{
//                 //     rotate: 0,
//                 //     stretch: 0,
//                 //     depth: 100,
//                 //     modifier: 1,
//                 //     slideShadows: true,
//                 // }}
//                 navigation={true}
//                 loop={true}
//                 autoplay={{
//                     delay: 4000,
//                     disableOnInteraction: true,
//                 }}
//                 // pagination={{
//                 //     clickable: true,
//                 // }}
//                 modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
//                 className="Content__Carousel-mySwiper"
//             >
//                 <ul>
//                     {timelinesData.map((timeline: any) => {
//                         return (
//                             <li key={timeline.timeline_name}>
//                                 <SwiperSlide className="Content__Carousel-swiper-slide">
//                                     <Link
//                                         className="Content__Carousel-micro-card"
//                                         to={`/timelines/${timeline.timeline_name}`}
//                                     >
//                                         {/* <button> */}
//                                         {timeline.timeline_name}
//                                         {/* </button> */}
//                                     </Link>
//                                 </SwiperSlide>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </Swiper>
//         </div>
//     );
// };

// export default CarouselContent;

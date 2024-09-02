import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/CarouselProfile.css";

import { Parallax, Pagination, Navigation } from "swiper/modules";

const CarouselProfile = () => {
    return (
        <>
            <Swiper
                style={
                    {
                        // "--swiper-navigation-color": "#fff",
                        // "--swiper-pagination-color": "#fff",
                    }
                }
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                >
                    <img
                        src="https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah2003153.png"
                        className="parallax-bg-img"
                    />
                </div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Profile
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Alex Hughes
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            I am an enthusiastic and dynamic developer with
                            strong problem-solving skills built through a range
                            of experience in the engineering and construction
                            industries.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Profile
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Alex Hughes
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            I have recently completed Northcoders’ Software
                            Development course allowing me to utilise these
                            skills within a field that aligns with my passions
                            and strengths.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Profile
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Alex Hughes
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            I am pro-active and self-motivated yet I excel most
                            when made use of. I love being challenged with a
                            task and will always strive to deliver innovative
                            solutions.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Profile
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Alex Hughes{" "}
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            As a quick-learner, accustomed to facing unique
                            challenges, I have become adept at identifying and
                            solving complex problems in demanding situations.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default CarouselProfile;

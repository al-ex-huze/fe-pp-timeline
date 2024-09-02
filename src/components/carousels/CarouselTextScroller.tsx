import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import "../../styles/CarouselTextScroller.css";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

const CarouselTextScroller = () => {
    return (
        <>
            <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper__text-scroller"
            >
                <SwiperSlide>
                    <h4>Scroll Container</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In luctus, ex eu sagittis faucibus, ligula ipsum
                        sagittis magna, et imperdiet dolor lectus eu libero.
                        Vestibulum venenatis eget turpis sed faucibus. Maecenas
                        in ullamcorper orci, eu ullamcorper sem. Etiam elit
                        ante, luctus non ante sit amet, sodales vulputate odio.
                        Aenean tristique nisl tellus, sit amet fringilla nisl
                        volutpat cursus. Quisque dignissim lectus ac nunc
                        consectetur mattis. Proin vel hendrerit ipsum, et
                        lobortis dolor. Vestibulum convallis, nibh et tincidunt
                        tristique, nisl risus facilisis lectus, ut interdum orci
                        nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum
                        at elit sodales posuere eget non est. Fusce convallis
                        vestibulum dolor non volutpat. Vivamus vestibulum quam
                        ut ultricies pretium.
                    </p>
                    
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default CarouselTextScroller
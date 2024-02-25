import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider({slide}) {

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={50}
                sliderPerView={3}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSlideChang={() =>  {
                console.log('slide change')
                }}
                onSwiper={(swiper) => {
                    console.log(swiper);
                }}
            >
                {slide.map((slides) => (

                   <SwiperSlide key={slides.movie1}>
                       <img src={slides.image} alt="" />
                   </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

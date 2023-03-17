
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import v1 from '../../assets/v1.mp4'
import v2 from '../../assets/v2.mp4'
import v3 from '../../assets/v3.mp4'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import ReactPlayer from "react-player";

export default function Hero() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <ReactPlayer playing={true}
                        className='react-player'
                        url={v1}
                        width='100%'
                        height='100%'
                    />
                </SwiperSlide>
                <SwiperSlide>  <ReactPlayer playing={true}
                    className='react-player'
                    url={v2}
                    width='100%'
                    height='100%'
                /></SwiperSlide>

                <SwiperSlide>  <ReactPlayer playing={true}
                    className='react-player'
                    url={v3}
                    width='100%'
                    height='100%'
                /></SwiperSlide>

            </Swiper>
        </>
    );
}

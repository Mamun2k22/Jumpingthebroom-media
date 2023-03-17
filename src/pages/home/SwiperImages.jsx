// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                navigation={true}
                slidesPerView={2}
                spaceBetween={4}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}

                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill lg:w-11/12 h-96 sm:w-full md:w-11/12"
                        src="https://images.pexels.com/photos/6144676/pexels-photo-6144676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="img2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill lg:w-11/12 h-96 sm:w-full md:w-11/12"
                        src="https://images.pexels.com/photos/5146585/pexels-photo-5146585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="img2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill lg:w-11/12 h-96 sm:w-full md:w-11/12"
                        src="https://images.pexels.com/photos/5206714/pexels-photo-5206714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="img2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill lg:w-11/12 h-96 sm:w-full md:w-11/12"
                        src="https://images.pexels.com/photos/5146585/pexels-photo-5146585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="img2"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

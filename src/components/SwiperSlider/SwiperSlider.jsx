import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { assets } from '@/assets/assets';

function SwiperSlider() {
    const sliders = [assets.slider1, assets.slider1, assets.slider1, assets.slider1, assets.slider1];

    return (
        <div className="">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
                className="w-full h-[475px]"
            >
                {sliders.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full sm:h-[400px] md:h-[500px] lg:h-[640px] object-cover overflow-hidden">
                            <img src={slider} alt={`Slide ${index + 1}`} className="w-full h-full" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperSlider;

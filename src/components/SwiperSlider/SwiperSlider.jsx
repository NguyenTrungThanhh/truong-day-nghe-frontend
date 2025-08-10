import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { assets } from '@/assets/assets';

function SwiperSlider() {
    const sliders = [
        assets.khaiGiangLopHoc,
        assets.danXeTapLai,
        assets.sanTruong2,
        assets.khoaHocA,
        assets.sanTruong4,
    ];

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
                className="w-full"
            >
                {sliders.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[440px] xl:h-[520px] overflow-hidden">
                            <img src={slider} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperSlider;

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TinTucItem from '@/components/TinTucItem';
import { tinTucData } from '@/assets/assets';

function TinTuc() {
    const swiperRef = useRef(null);

    return (
        <div className="w-full py-16">
            <div className="w-[80%] mx-auto">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="w-[44%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase">Tin tức</h1>
                    <hr className="w-[44%] border-t-[1px] border-primary-blueOne" />
                </div>
                <div className="relative">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination, EffectFade]}
                        slidesPerView={3}
                        spaceBetween={20}
                        slidesPerGroup={1}
                        loop={true}
                        className="relative z-0 h-full"
                    >
                        {tinTucData.map((item, index) => (
                            <SwiperSlide className="relative">
                                <TinTucItem
                                    key={index}
                                    name={item.name}
                                    slug={item.slug}
                                    date={item.date}
                                    image={item.image}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Nút Prev */}
                    <div
                        className="absolute top-28 -left-24 -translate-y-1/2 z-10 group w-[72px] h-[72px] border-2 rounded-full flex items-center justify-center hover:bg-primary-blueOne/10 transition-colors duration-300 cursor-pointer"
                        onClick={() => swiperRef.current?.swiper?.slidePrev()}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} size="lg" className="text-primary-blueOne" />
                    </div>

                    {/* Nút Next */}
                    <div
                        className="absolute top-28 -right-24 -translate-y-1/2 z-10 group w-[72px] h-[72px] border-2 rounded-full flex items-center justify-center hover:bg-primary-blueOne/10 transition-colors duration-300 cursor-pointer"
                        onClick={() => swiperRef.current?.swiper?.slideNext()}
                    >
                        <FontAwesomeIcon icon={faChevronRight} size="lg" className="text-primary-blueOne" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TinTuc;

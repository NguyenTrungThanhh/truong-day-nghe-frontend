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
import config from '@/configs';
import { Link } from 'react-router-dom';

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
                                <div key={index} className="group overflow-hidden transition-all duration-300 mb-8">
                                    <div className="overflow-hidden rounded-xl">
                                        <Link to={`${config.routes.TinTuc}/${item.slug}`}>
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="w-full h-auto object-cover rounded-xl group-hover:scale-110 duration-300"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-4">
                                        <Link to={`${config.routes.TinTuc}/${item.slug}`}>
                                            <h1 className="text-lg font-semibold text-primary-blueOne line-clamp-2">
                                                {item.name}
                                            </h1>
                                        </Link>
                                        <p className="mt-2 text-sm">{item.date}</p>
                                    </div>
                                </div>
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

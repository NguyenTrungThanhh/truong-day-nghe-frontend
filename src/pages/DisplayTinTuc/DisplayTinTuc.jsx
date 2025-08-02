import { use, useContext, useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { TruongDayngheContext } from '@/context/TruongDayngheContext';

function DisplayTinTuc() {
    const { tinTucData } = useContext(TruongDayngheContext);

    const swiperRef = useRef(null);

    const { slug } = useParams();
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/client/TinTuc/${slug}`);
                setNewsData(res.data.news);
            } catch (error) {
                console.error('Lỗi khi load chi tiết tin tức:', error);
            }
        };

        fetchData();
        console.log(tinTucData);
    }, [slug]);

    useEffect(() => {
        document.title = newsData?.name;
    });

    return (
        <>
            {/* Breadcrumb */}
            <div className="w-full bg-[#f4f4f4] py-4">
                <div className="w-[78%] mx-auto">
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <Link to={config.routes.home}>
                            <h1>Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" className="mt-1" />
                        <Link to={config.routes.TinTuc}>
                            <h1>Tin tức</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" className="mt-1" />
                        <h1 className="text-primary-blueOne">{newsData?.name || 'Đang tải...'}</h1>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="w-[78%] mx-auto mt-10">
                <div className="flex gap-6 items-start">
                    {/* Nội dung chính */}
                    <div className="w-[70%] pr-4">
                        {newsData ? (
                            <>
                                <h1 className="text-[32px] font-bold mb-4 text-primary-blueOne">{newsData.name}</h1>
                                <p className="text-gray-500 text-sm mb-4 italic">{newsData.date}</p>
                                <div className="content-area" dangerouslySetInnerHTML={{ __html: newsData.content }} />
                            </>
                        ) : (
                            <p>Đang tải nội dung bài viết...</p>
                        )}
                    </div>

                    {/* Tin tức nổi bật */}
                    <div className="w-[30%] pl-6 border-l border-gray-300 sticky top-28">
                        <h2 className="text-2xl font-bold mb-4 text-primary-blueOne">Tin tức nổi bật</h2>
                        <div className="flex flex-col gap-8">
                            {tinTucData.slice(0, 6).map((item, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <Link to={`${config.routes.TinTuc}/${item.slug}`}>
                                        <div>
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="w-[142px] rounded-lg group-hover:scale-105 duration-300"
                                            />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link to={`${config.routes.TinTuc}/${item.slug}`}>
                                            <h1 className="text-sm text-primary-blueOne font-semibold line-clamp-2 mb-2">
                                                {item.name}
                                            </h1>
                                        </Link>
                                        <p className="text-xs text-gray-500 font-medium">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[78%] mx-auto mt-28 mb-20">
                <h1 className="text-[32px] font-bold text-primary-blueOne mb-8">Tin tức liên quan</h1>
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
        </>
    );
}

export default DisplayTinTuc;

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '@/configs';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const GioiThieu = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // chỉ kích hoạt 1 lần
        threshold: 0.3, // kích hoạt khi 30% phần tử vào màn hình
    });

    useEffect(() => {
        document.title = 'Giới thiệu';
    });

    return (
        <>
            <div className="w-full bg-[#f4f4f4] py-4">
                <div className="w-[80%] mx-auto">
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <Link to={config.routes.home}>
                            <h1>Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" className="mt-1" />
                        <h1 className="text-primary-blueOne">Giới thiệu</h1>
                    </div>
                </div>
            </div>
            <div className="p-4 md:p-8 max-w-screen-xl mx-auto space-y-10">
                {/* Giới thiệu tổng quan */}
                <section className="bg-white p-6 md:p-10 rounded-2xl shadow-md border border-gray-100">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary-blueOne mb-4">
                        Giới thiệu Trung tâm Đào tạo Lái xe LOD
                    </h1>
                    <div className="space-y-3 text-gray-700 leading-relaxed text-justify">
                        <p>
                            Trung tâm Đào tạo Lái xe LOD là một trong những đơn vị đào tạo lái xe hàng đầu tại miền Bắc.
                            Với hơn 20 năm kinh nghiệm trong lĩnh vực đào tạo và sát hạch lái xe, chúng tôi tự hào mang
                            đến cho học viên một môi trường học tập chuyên nghiệp, hiện đại và an toàn.
                        </p>
                        <p>
                            LOD sở hữu hệ thống sân tập rộng khắp các quận huyện Hà Nội, đáp ứng đa dạng nhu cầu và vị
                            trí địa lý của học viên. Đội ngũ giảng viên là những người giàu kinh nghiệm, tận tâm trong
                            giảng dạy và luôn cập nhật những kiến thức mới nhất về luật giao thông.
                        </p>
                        <p>
                            Mỗi học viên tại LOD đều được hướng dẫn tận tình từ lý thuyết đến thực hành, đảm bảo nắm
                            vững kỹ năng và tự tin khi tham gia giao thông sau khi tốt nghiệp.
                        </p>
                    </div>
                </section>

                {/* Sứ mệnh – Tầm nhìn – Giá trị cốt lõi */}
                <section className="bg-white p-6 md:p-10 rounded-2xl shadow-md border border-gray-100">
                    <h2 className="text-xl font-bold text-primary-blueOne mb-4">Sứ mệnh & Tầm nhìn</h2>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                        <p>
                            <strong>Sứ mệnh:</strong> Đào tạo thế hệ lái xe an toàn, chuyên nghiệp, góp phần xây dựng
                            văn hóa giao thông văn minh.
                        </p>
                        <p>
                            <strong>Tầm nhìn:</strong> Trở thành trung tâm đào tạo lái xe hàng đầu miền Bắc với mạng
                            lưới sân tập và chất lượng đào tạo chuẩn quốc gia.
                        </p>
                        <p>
                            <strong>Giá trị cốt lõi:</strong> Tận tâm – Chất lượng – Minh bạch – An toàn
                        </p>
                    </div>
                </section>

                {/* Thống kê nhanh */}
                <section ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { label: 'Học viên đã đào tạo', value: 25000, suffix: '+' },
                        { label: 'Giảng viên giàu kinh nghiệm', value: 100, suffix: '+' },
                        { label: 'Cơ sở sân tập', value: 10, suffix: '+' },
                        { label: 'Tỉ lệ đậu lần đầu', value: 90, suffix: '%' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#f0f8ff] p-6 rounded-xl shadow-md">
                            <p className="text-2xl font-bold text-primary-blueOne">
                                {inView ? (
                                    <CountUp end={item.value} duration={2} suffix={item.suffix} />
                                ) : (
                                    `${item.value}${item.suffix}`
                                )}
                            </p>
                            <p className="text-gray-600 mt-2">{item.label}</p>
                        </div>
                    ))}
                </section>

                {/* Đánh giá học viên */}
                <section className="bg-[#fafafa] p-8 rounded-2xl shadow-md space-y-6">
                    <h2 className="text-xl font-bold text-primary-blueOne">Học viên nói gì về LOD?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                name: 'Nguyễn Thị Mai',
                                comment: 'Thầy cô rất nhiệt tình, cơ sở vật chất tốt, thi đậu ngay lần đầu luôn!',
                            },
                            {
                                name: 'Trần Văn An',
                                comment: 'Giá cả hợp lý, có sân tập gần nhà, lịch học linh hoạt. Rất hài lòng!',
                            },
                        ].map((c, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl border shadow-sm">
                                <p className="text-gray-600 italic">“{c.comment}”</p>
                                <p className="text-sm font-semibold mt-2 text-right text-primary-blueOne">– {c.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video giới thiệu (nếu có) */}
                <section className="mt-10 text-center">
                    <h2 className="text-xl font-bold text-primary-blueOne mb-4">Video giới thiệu</h2>
                    <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                            title="Giới thiệu LOD"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </section>
            </div>
        </>
    );
};

export default GioiThieu;

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '@/configs';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { assets } from '@/assets/assets';

const GioiThieu = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        document.title = 'Giới thiệu - Trung tâm Đào tạo lái xe thuộc Công ty Cổ phần Vận tải Ô tô số 4';
    }, []);

    return (
        <>
            <div className="w-full bg-[#f4f4f4] py-4">
                <div className="w-[90%] max-w-screen-xl mx-auto">
                    <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                        <Link to={config.routes.home}>
                            <h1>Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" className="mt-[2px]" />
                        <h1 className="text-primary-blueOne">
                            Giới thiệu Trung tâm Đào tạo lái xe thuộc Công ty Cổ phần Vận tải Ô tô số 4
                        </h1>
                    </div>
                </div>
            </div>

            <div className="p-4 md:p-8 max-w-screen-xl mx-auto space-y-10">
                {/* Giới thiệu tổng quan */}
                <section className="bg-white p-5 md:p-10 rounded-2xl shadow-md border border-gray-100">
                    <h1 className="text-xl md:text-3xl font-bold text-primary-blueOne mb-4">
                        Giới thiệu Trung tâm Đào tạo lái xe thuộc Công ty Cổ phần Vận tải Ô tô số 4
                    </h1>
                    <div className="space-y-4 text-gray-700 leading-relaxed text-justify text-sm md:text-base">
                        <p>
                            Được xây dựng từ những năm 2000 tại cửa ngõ phía Bắc tỉnh Thanh Hóa, Trung tâm Đào tạo lái
                            xe mô tô và bổ túc nghề thuộc Công ty Cổ phần Vận tải Ô tô số 4 là một trong những đơn vị
                            hàng đầu trong lĩnh vực đào tạo lái xe ô tô và mô tô tại Thanh Hóa – Ninh Bình.
                        </p>
                        <p>
                            Trung tâm hiện đang đào tạo các hạng bằng lái: A1, B (số tự động, số cơ khí), và C1. Cơ sở
                            vật chất được trang bị đồng bộ, hiện đại với sân tập lái có tổng diện tích lên tới 26.000m²,
                            hệ thống phòng học, phòng thi, và phòng cabin điện tử.
                        </p>
                        <p>
                            Đội ngũ gần 200 giáo viên của Trung tâm đều được đào tạo bài bản về nghiệp vụ sư phạm, có
                            trình độ chuyên môn cao, giàu kinh nghiệm và luôn tâm huyết trong công tác giảng dạy.
                        </p>
                        <p>
                            Xe tập lái là các dòng xe đời mới, đa dạng mẫu mã, được trang bị đầy đủ tính năng an toàn,
                            giúp học viên yên tâm và thoải mái trong quá trình học. Nhờ đó, chất lượng đào tạo ngày càng
                            được nâng cao và tỷ lệ thi đậu luôn ở mức cao.
                        </p>
                        <p>
                            Sau khi hoàn thành khóa học, học viên sẽ được trang bị đầy đủ kiến thức và kỹ năng để tham
                            gia giao thông một cách an toàn và tự tin.
                        </p>
                    </div>
                </section>

                {/* Sứ mệnh – Tầm nhìn – Giá trị cốt lõi */}
                <section className="bg-white p-5 md:p-10 rounded-2xl shadow-md border border-gray-100">
                    <h2 className="text-xl md:text-2xl font-bold text-primary-blueOne mb-4">Sứ mệnh & Tầm nhìn</h2>
                    <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base">
                        <p>
                            <strong>Sứ mệnh:</strong> Đào tạo thế hệ lái xe an toàn, chuyên nghiệp, góp phần xây dựng
                            văn hóa giao thông văn minh.
                        </p>
                        <p>
                            <strong>Tầm nhìn:</strong> Trở thành trung tâm đào tạo lái xe hàng đầu khu vực Thanh Hóa –
                            Ninh Bình với cơ sở vật chất hiện đại và chất lượng đào tạo đạt chuẩn quốc gia.
                        </p>
                        <p>
                            <strong>Giá trị cốt lõi:</strong> Tận tâm – Chất lượng – Minh bạch – An toàn
                        </p>
                    </div>
                </section>

                {/* Thống kê nhanh */}
                <section ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { label: 'Học viên đã đào tạo', value: 25000, suffix: '+' },
                        { label: 'Giáo viên chuyên nghiệp', value: 200, suffix: '+' },
                        { label: 'Diện tích sân tập', value: 26000, suffix: 'm²' },
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
                            <p className="text-gray-600 mt-2 text-sm">{item.label}</p>
                        </div>
                    ))}
                </section>

                {/* Đánh giá học viên */}
                <section className="bg-[#fafafa] p-5 md:p-8 rounded-2xl shadow-md space-y-6">
                    <h2 className="text-xl md:text-2xl font-bold text-primary-blueOne">Học viên nói gì?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                <p className="text-gray-600 italic text-sm md:text-base">“{c.comment}”</p>
                                <p className="text-sm font-semibold mt-2 text-right text-primary-blueOne">– {c.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bộ sưu tập hình ảnh */}
                <section className="mt-10">
                    <h2 className="text-xl md:text-2xl font-bold text-primary-blueOne mb-4 text-center">
                        Hình ảnh hoạt động
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <img
                            src={assets.gioiThieu}
                            alt="Hình ảnh 1"
                            className="w-full h-64 object-cover rounded-xl shadow-md"
                        />
                        <img
                            src={assets.khaiGiangLopHoc}
                            alt="Hình ảnh 2"
                            className="w-full h-64 object-cover rounded-xl shadow-md"
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default GioiThieu;

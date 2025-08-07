import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';

const khoaHocData = [
    {
        title: 'Khóa học lái xe mô tô hạng A1',
        description:
            'Khóa học dành cho người điều khiển xe mô tô có dung tích xi-lanh từ 50cm³ đến dưới 175cm³. Phù hợp với người trên 18 tuổi có nhu cầu sử dụng xe máy phổ thông.',
        price: '1.200.000₫',
        duration: '7 - 10 ngày',
        schedule: 'Linh hoạt các ngày trong tuần',
        location: 'Sân thi Thủ Đức / Quận 12',
        includes: ['Học lý thuyết & thực hành', 'Lệ phí thi sát hạch', 'Hướng dẫn hồ sơ và mẹo thi'],
        note: 'Không cần học nhiều, thi trọn gói A-Z.',
        route: config.routes.KhoaHocLaiXeMoToHangA1,
    },
    {
        title: 'Khóa học lái xe ô tô hạng B (số tự động)',
        description:
            'Khóa học lái xe ô tô số tự động, không kinh doanh vận tải. Phù hợp với học viên nữ hoặc người mới bắt đầu muốn lái xe gia đình.',
        price: '12.000.000₫',
        duration: '3 - 4 tháng',
        schedule: 'Linh hoạt các ngày trong tuần',
        location: 'Sân tập Thủ Đức / Quận 12',
        includes: ['Học lý thuyết và thực hành', 'Lệ phí thi sát hạch', 'Xe tập đời mới, có máy lạnh'],
        note: 'Không yêu cầu thi số sàn, dễ thi đậu hơn.',
        route: config.routes.KhoaHocLaiXeOToHangBSoTuDong,
    },
    {
        title: 'Khóa học lái xe ô tô hạng B (số cơ khí)',
        description:
            'Khóa học lái xe số sàn, được phép kinh doanh vận tải. Phù hợp với học viên muốn linh hoạt sử dụng nhiều loại xe.',
        price: '11.500.000₫',
        duration: '4 tháng',
        schedule: 'Học buổi tối hoặc cuối tuần',
        location: 'Bình Thạnh / Quận 7',
        includes: ['Học lý thuyết + thực hành', 'Phí tài liệu, đồng phục', 'Xe tập số sàn thực tế'],
        note: 'Thi bằng xe số sàn – khó hơn B (số tự động) nhưng giá trị sử dụng cao hơn.',
        route: config.routes.KhoaHocLaiXeOToHangBSoCoKhi,
    },
    {
        title: 'Khóa học lái xe ô tô hạng C1',
        description:
            'Khóa học dành cho người muốn lái xe tải từ 3.5 tấn trở lên, xe đầu kéo không rơ moóc, không giới hạn trọng tải.',
        price: '14.000.000₫',
        duration: '5 tháng',
        schedule: 'Học theo lớp cố định',
        location: 'Sân tập Quận 9 / Hóc Môn',
        includes: ['Lý thuyết và thực hành chuyên sâu', 'Xe tải đời mới', 'Lệ phí khám sức khỏe + hồ sơ'],
        note: 'Phù hợp với tài xế chuyên nghiệp hoặc lái xe công trình.',
        route: config.routes.KhoaHocLaiXeOToHangC1,
    },
    {
        title: 'Khóa học lái xe ô tô nâng hạng C',
        description:
            'Khóa học dành cho người đã có bằng B hoặc C1, muốn nâng lên hạng C để lái xe tải nặng hoặc xe công trình chuyên dụng.',
        price: '15.000.000₫',
        duration: '1.5 tháng',
        schedule: 'Thứ 7 & Chủ nhật',
        location: 'Sân thi Gò Vấp',
        includes: ['Lệ phí thi sát hạch', 'Hướng dẫn hồ sơ nâng hạng', 'Ôn thi lý thuyết + thực hành'],
        note: 'Áp dụng cho nâng hạng từ B hoặc C1 lên C theo quy định tại Thông tư 35/2024.',
        route: config.routes.KhoaNangHangCLenC,
    },
];

function BangGiaHocPhi() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.title = 'Bảng giá học phí các khóa học';
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
                        <h1 className="text-primary-blueOne">Bảng giá học phí các khóa học</h1>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto py-16">
                <h1 className="text-3xl font-bold text-center text-primary-blueOne uppercase mb-12">
                    Bảng giá học phí các khóa học
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {khoaHocData.map((khoa, index) => (
                        <div
                            key={index}
                            className="border rounded-xl shadow-lg p-6 bg-white hover:shadow-xl transition duration-300"
                        >
                            <h2 className="text-2xl font-semibold text-primary-blueOne mb-2">{khoa.title}</h2>
                            <p className="text-gray-700 mb-3 italic">{khoa.description}</p>

                            <ul className="text-sm text-gray-600 mb-4 space-y-1">
                                <li>
                                    <strong>⏰ Thời gian học:</strong> {khoa.duration}
                                </li>
                                <li>
                                    <strong>📅 Lịch học:</strong> {khoa.schedule}
                                </li>
                                <li>
                                    <strong>📍 Địa điểm:</strong> {khoa.location}
                                </li>
                            </ul>

                            <p className="font-semibold text-gray-800 mb-2">🧾 Học phí bao gồm:</p>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                {khoa.includes.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            {khoa.note && <p className="text-sm italic text-red-500 mb-4">📌 {khoa.note}</p>}

                            <div className="flex items-center justify-between">
                                <p className="text-lg font-bold text-red-500">{khoa.price}</p>
                                <div className="flex gap-2">
                                    <button
                                        className="px-4 py-2 bg-primary-blueOne text-white rounded-full hover:bg-primary-blueTwo transition"
                                        onClick={() => setShowModal(true)}
                                    >
                                        Đăng ký ngay
                                    </button>
                                    <Link
                                        to={khoa.route}
                                        className="px-4 py-2 bg-primary-blueOne text-white rounded-full hover:bg-primary-blueTwo transition"
                                    >
                                        Chi tiết
                                    </Link>
                                </div>
                            </div>
                            {showModal && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-[60]">
                                    <div className="bg-white p-6 rounded-lg w-[90%] max-w-sm shadow-lg">
                                        <h2 className="text-lg font-bold mb-4 text-center">Bạn muốn làm gì?</h2>
                                        <div className="flex flex-col gap-3">
                                            <a
                                                href="https://datxere.vn/?p=81259&auto=1&dichvu=xgh"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-primary-blueOne text-white py-2 px-4 rounded text-center hover:opacity-90"
                                            >
                                                Đăng ký qua fanpage
                                            </a>
                                            <a
                                                href="https://datxere.vn/?p=81259&auto=1&dichvu=xgh"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-primary-blueOne text-white py-2 px-4 rounded text-center hover:opacity-90"
                                            >
                                                Đăng ký qua fanpage
                                            </a>
                                            <a
                                                href="tel:19008638"
                                                className="bg-primary-blueOne text-white py-2 px-4 rounded text-center hover:opacity-90"
                                            >
                                                Gọi trực tiếp 1900 8638
                                            </a>
                                            <button
                                                onClick={() => setShowModal(false)}
                                                className="mt-2 py-2 px-4 text-white rounded bg-primary-blueTwo hover:opacity-90 text-sm"
                                            >
                                                Đóng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BangGiaHocPhi;

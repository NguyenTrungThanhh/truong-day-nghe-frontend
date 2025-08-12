import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';

const khoaHocData = [
    {
        title: 'Khóa học lái xe mô tô hạng A1',
        description: [
            'Khóa học dành cho người điều khiển xe mô tô có dung tích xi-lanh từ 50cm³ đến dưới 125cm³.',
            'Phù hợp với người từ 18 tuổi có nhu cầu sử dụng xe máy phổ thông.',
        ],
        price: '500.000₫',
        duration: '7 - 10 ngày',
        schedule: 'Linh hoạt các ngày trong tuần',
        location: 'Trung tâm đào tạo lái xe – công ty cổ phần vận tải oto số 4',
        includes: ['Học lý thuyết & thực hành', 'Lệ phí thi sát hạch', 'Hướng dẫn hồ sơ và mẹo thi'],
        note: 'Không cần học nhiều, thi trọn gói A-Z.',
        route: config.routes.KhoaHocLaiXeMoToHangA1,
    },
    {
        title: 'Khóa học lái xe ô tô hạng B (số tự động)',
        description: [
            'Ô tô chở người đến 9 chỗ ngồi (bao gồm cả chỗ ngồi của người lái).',
            'Ô tô tải, kể cả ô tô tải chuyên dùng, có khối lượng toàn bộ theo thiết kế dưới 3.500 kg.',
            'Các loại xe ô tô trên có kéo theo rơ moóc với khối lượng toàn bộ theo thiết kế dưới 750 kg.',
        ],
        price: '16.000.000₫',
        duration: '2.5 tháng',
        schedule: 'Linh hoạt các ngày trong tuần',
        location: 'Trung tâm đào tạo lái xe – công ty cổ phần vận tải oto số 4',
        includes: ['Học lý thuyết và thực hành', 'Lệ phí thi sát hạch', 'Xe tập đời mới, có máy lạnh'],
        note: 'Bằng lái xe hạng B (số tự động) chỉ được phép điều khiển xe số tự động, không được phép điều khiển xe số sàn. Không yêu cầu thi số sàn, dễ thi đậu hơn.',
        route: config.routes.KhoaHocLaiXeOToHangBSoTuDong,
    },
    {
        title: 'Khóa học lái xe ô tô hạng B (số cơ khí)',
        description: [
            'Ô tô chở người đến 9 chỗ ngồi (bao gồm cả chỗ ngồi của người lái).',
            'Ô tô tải, kể cả ô tô tải chuyên dùng, có khối lượng toàn bộ theo thiết kế dưới 3.500 kg.',
            'Các loại xe ô tô trên có kéo theo rơ moóc với khối lượng toàn bộ theo thiết kế dưới 750 kg.',
            'Đặc biệt: Bằng lái xe hạng B (cơ khí) cho phép bạn điều khiển được cả xe số sàn và xe số tự động.',
        ],
        price: '16.000.000₫',
        duration: '3 tháng',
        schedule: 'Linh hoạt các ngày trong tuần',
        location: 'Trung tâm đào tạo lái xe – công ty cổ phần vận tải oto số 4',
        includes: ['Học lý thuyết + thực hành', 'Phí tài liệu, đồng phục', 'Xe tập số sàn thực tế'],
        note: 'Thi bằng xe số sàn – khó hơn B (số tự động) nhưng giá trị sử dụng cao hơn.',
        route: config.routes.KhoaHocLaiXeOToHangBSoCoKhi,
    },
    {
        title: 'Khóa học lái xe ô tô hạng C1',
        description: [
            'Ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế từ trên 3.500 kg đến 7.500 kg.',
            'Các loại xe ô tô tải thuộc hạng C1 có kéo theo rơ moóc với khối lượng toàn bộ theo thiết kế đến 750 kg.',
            'Các loại xe được quy định cho bằng lái xe hạng B (ô tô chở người đến 9 chỗ ngồi, ô tô tải có trọng tải dưới 3.500 kg).',
        ],
        price: '19.000.000₫',
        duration: '3 tháng',
        schedule: 'Linh hoạt các ngày trong tuần',
        location: 'Trung tâm đào tạo lái xe – công ty cổ phần vận tải oto số 4',
        includes: ['Lý thuyết và thực hành chuyên sâu', 'Xe tải đời mới', 'Lệ phí khám sức khỏe + hồ sơ'],
        note: 'Phù hợp với tài xế chuyên nghiệp hoặc lái xe công trình.',
        route: config.routes.KhoaHocLaiXeOToHangC1,
    },
    {
        title: 'Khóa học lái xe ô tô nâng hạng C',
        description: [
            'Khóa học dành cho người đã có bằng B hoặc C1.',
            'Muốn nâng lên hạng C để lái xe tải nặng hoặc xe công trình chuyên dụng.',
        ],
        price: 'Liên hệ',
        duration: '1.5 tháng',
        schedule: 'Linh hoạt các ngày trong tuần',
        location: 'Trung tâm đào tạo lái xe – công ty cổ phần vận tải oto số 4',
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
                            className="border rounded-xl shadow-lg p-6 bg-white hover:shadow-xl transition duration-300 flex flex-col h-full"
                        >
                            {/* Tiêu đề */}
                            <h2 className="text-2xl font-semibold text-primary-blueOne mb-2">{khoa.title}</h2>

                            {/* Mô tả */}
                            <ul className="list-disc pl-5 text-gray-700 mb-3 italic">
                                {khoa.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            {/* Thông tin */}
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

                            {/* Bao gồm */}
                            <p className="font-semibold text-gray-800 mb-2">🧾 Học phí bao gồm:</p>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                {khoa.includes.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            {/* Ghi chú */}
                            {khoa.note && <p className="text-sm italic text-red-500 mb-4">📌 {khoa.note}</p>}

                            {/* Phần đáy card */}
                            <div className="mt-auto pt-4 border-t">
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
                            </div>

                            {/* Modal */}
                            {showModal && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-[60]">
                                    <div className="bg-white p-6 rounded-lg w-[90%] max-w-sm shadow-lg">
                                        <h2 className="text-lg font-bold mb-4 text-center">Bạn muốn làm gì?</h2>
                                        <div className="flex flex-col gap-3">
                                            <a
                                                href="https://www.facebook.com/profile.php?id=61558417543410"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-primary-blueOne text-white py-2 px-4 rounded text-center hover:opacity-90"
                                            >
                                                Đăng ký qua Fanpage
                                            </a>
                                            <a
                                                href="tel:02373824988"
                                                className="bg-primary-blueOne text-white py-2 px-4 rounded text-center hover:opacity-90"
                                            >
                                                Gọi trực tiếp 0237 3824 988
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

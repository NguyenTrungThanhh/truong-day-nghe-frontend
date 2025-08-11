import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TaiSao from '@/components/TaiSao';
import HinhAnhTaiTrungTam from '@/components/HinhAnhTaiTrungTam';
import config from '@/configs';
import { assets } from '@/assets/assets';
import ThamKhaoKhoaHoc from '@/components/ThamKhaoKhoaHoc';

function KhoaHocLaiXeOToHangC1() {
    const swiperRef = useRef(null);

    useEffect(() => {
        document.title = 'Khóa học lái xe ô tô hạng C1';
    });

    return (
        <>
            <div className="w-full bg-[#f4f4f4] py-4">
                <div className="w-[90%] lg:w-[80%] mx-auto">
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <Link to={config.routes.home}>
                            <h1>Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" className="mt-1" />
                        <h1 className="text-primary-blueOne">Khóa học lái xe ô tô hạng C1</h1>
                    </div>
                </div>
            </div>
            <div className="w-full bg-primary-blueOne py-16">
                <div className="w-[90%] lg:w-[80%] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8 text-center">
                        <hr className="hidden lg:block w-[27%] border-white" />
                        <h1 className="text-2xl font-bold text-white uppercase">
                            Nội dung khóa học lái xe ô tô hạng C1
                        </h1>
                        <hr className="hidden lg:block w-[27%] border-white" />
                    </div>
                    <p className="text-center text-white mb-8">
                        Giáo trình bám sát nội dung sát hạch cho hạng C1, nhằm đảm bảo tỉ lệ đạt cao nhất.
                    </p>

                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-primary-blueOne text-xl font-semibold mb-4 uppercase">
                            🧾 Điều kiện & hồ sơ
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Độ tuổi: từ 18 tuổi (tính đến ngày dự sát hạch).</li>
                            <li>
                                Hồ sơ bao gồm:
                                <ul className="list-disc pl-6">
                                    <li>Đơn đề nghị học – dự sát hạch (mẫu sẵn).</li>
                                    <li>Giấy chứng nhận sức khỏe (mẫu sẵn).</li>
                                    <li>Bản sao CCCD hoặc Hộ chiếu.</li>
                                    <li>08 ảnh 3x4 nền xanh và 02 ảnh 4x6 nền trắng.</li>
                                </ul>
                            </li>
                        </ul>

                        <h2 className="text-primary-blueOne text-xl font-semibold mt-8 mb-4 uppercase">📚 Lý thuyết</h2>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg">
                            <table className="min-w-full text-sm text-left">
                                <thead className="bg-gray-100 text-gray-800 font-semibold">
                                    <tr>
                                        <th className="border px-4 py-2" colSpan={2}>
                                            Nội dung
                                        </th>
                                        <th className="border px-4 py-2 text-center">Giờ</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr>
                                        <td className="border px-4 py-2">1</td>
                                        <td className="border px-4 py-2">Pháp luật về giao thông đường bộ</td>
                                        <td className="border px-4 py-2 text-center">90</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">2</td>
                                        <td className="border px-4 py-2">Cấu tạo và sửa chữa thông thường</td>
                                        <td className="border px-4 py-2 text-center">18</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2" rowSpan={2}>
                                            3
                                        </td>
                                        <td className="border px-4 py-2">
                                            Đạo đức, văn hóa giao thông và phòng chống tác hại của rượu, bia
                                        </td>
                                        <td className="border px-4 py-2 text-center" rowSpan={2}>
                                            20
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Kỹ năng PCCC & cứu nạn, cứu hộ</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">4</td>
                                        <td className="border px-4 py-2">Kỹ thuật lái xe</td>
                                        <td className="border px-4 py-2 text-center">20</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">5</td>
                                        <td className="border px-4 py-2">Phần mềm mô phỏng tình huống giao thông</td>
                                        <td className="border px-4 py-2 text-center">4</td>
                                    </tr>
                                    <tr className="bg-gray-50 font-semibold">
                                        <td className="border px-4 py-2 text-center" colSpan={2}>
                                            Tổng thời gian học lý thuyết
                                        </td>
                                        <td className="border px-4 py-2 text-center">152 giờ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-primary-blueOne text-xl font-semibold mt-8 mb-4 uppercase">🚘 Thực hành</h2>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg">
                            <table className="min-w-full text-sm text-left">
                                <thead className="bg-gray-100 text-gray-800 font-semibold">
                                    <tr>
                                        <th className="border px-4 py-2" colSpan={2}>
                                            Nội dung
                                        </th>
                                        <th className="border px-4 py-2 text-center">Giờ / km</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr>
                                        <td className="border px-4 py-2">1</td>
                                        <td className="border px-4 py-2">Thực hành lái xe trên sân tập</td>
                                        <td className="border px-4 py-2 text-center">43 giờ (~275 km)</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">2</td>
                                        <td className="border px-4 py-2">Thực hành lái xe trên đường giao thông</td>
                                        <td className="border px-4 py-2 text-center">48 giờ (~825 km)</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">3</td>
                                        <td className="border px-4 py-2">Lái xe trên cabin mô phỏng</td>
                                        <td className="border px-4 py-2 text-center">2 giờ</td>
                                    </tr>
                                    <tr className="bg-gray-50 font-semibold">
                                        <td className="border px-4 py-2" colSpan={2}>
                                            Tổng quãng đường thực hành mỗi học viên
                                        </td>
                                        <td className="border px-4 py-2 text-center">1.100 km</td>
                                    </tr>
                                    <tr className="bg-gray-50 font-semibold">
                                        <td className="border px-4 py-2" colSpan={2}>
                                            Tổng thời gian học thực hành
                                        </td>
                                        <td className="border px-4 py-2 text-center">93 giờ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-primary-blueOne text-xl font-semibold mt-8 mb-4 uppercase">
                            ⏱ Tổng thời gian đào tạo
                        </h2>
                        <p className="mb-4">
                            <span className="font-semibold">245 giờ</span> (152 giờ lý thuyết + 93 giờ thực hành), tương
                            ứng <span className="font-semibold">1.100 km</span> thực hành lái xe. Thời gian học tối đa{' '}
                            <span className="font-semibold">90 ngày</span> kể từ ngày khai giảng, bao gồm học, ôn tập,
                            kiểm tra và nghỉ lễ/Tết.
                        </p>

                        <h2 className="text-primary-blueOne text-xl font-semibold mt-8 mb-4 uppercase">
                            ✅ Hoàn thành & kiểm tra
                        </h2>
                        <p>
                            Học viên phải tham gia đầy đủ các buổi học, kiểm tra lý thuyết và thực hành theo chương
                            trình. Điểm kiểm tra đạt chuẩn là điều kiện để xét hoàn thành khóa học và đăng ký thi sát
                            hạch.
                        </p>

                        <h2 className="text-primary-blueOne text-xl font-semibold mt-8 mb-4 uppercase">
                            📍 Địa điểm & hỗ trợ
                        </h2>
                        <p>
                            Học lý thuyết tại Trung tâm Đào tạo lái xe mô tô & bổ túc nghề – Công ty Cổ phần Vận tải Ô
                            tô số 4. Mọi thông tin đăng ký và trích ngang hồ sơ được cập nhật tại Phòng Đào tạo. Liên hệ
                            hỗ trợ: <span className="font-semibold">02373.824.988</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[90%] lg:w-[80%] mx-auto py-16">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="hidden lg:block w-[22%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase text-center">
                        5 sai lầm thường gặp khi học lái xe ô tô hạng C1
                    </h1>
                    <hr className="hidden lg:block w-[22%] border-t-[1px] border-primary-blueOne" />
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <div>
                            <img src={assets.khoaHocC} alt="" className="rounded-lg" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <ol className="list-decimal pl-4">
                            <li className="font-semibold my-4">
                                Không chăm chỉ học thực hành nên không có đủ trải nghiệm kiến thức thực tế. Quá bận rộn
                                nên không dành đủ thời gian để học thực hành và lý thuyết tại trường.
                            </li>
                            <li className="font-semibold my-4">
                                Không xác định mục tiêu khi đi học, không tìm hiểu kỹ trước khi nhập học. Học theo phong
                                trào, không thực sự hào hứng tham gia học.
                            </li>
                            <li className="font-semibold my-4">
                                Thiếu động lực học tập, không cảm thấy thực sự cần thiết khi đi học nên thường thụ động
                                khi học.
                            </li>
                            <li className="font-semibold my-4">
                                Bạn có thể thực hành 1 mình. Đi học là cách tiếp cận “tự mình thực hành”, không phải
                                “mình làm một mình”. Lười tương tác 2 chiều với giáo viên và tự học không giúp bạn giỏi
                                hơn.
                            </li>
                            <li className="font-semibold my-4">
                                Nhầm tưởng qua hứa hẹn của quảng cáo. Thực tế học lái xe rất dễ nhưng để thi đỗ, lái tốt
                                trên đường thì không dễ. Cần tìm hiểu kỹ đơn vị đào tạo và đội ngũ giáo viên.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="w-full bg-primary-blueOne py-16">
                <div className="w-[90%] lg:w-[80%] mx-auto">
                    <div className="flex justify-center items-center gap-4 mb-16">
                        <hr className="hidden lg:block w-[15%]" />
                        <h1 className="text-2xl font-bold text-white uppercase text-center">
                            Ưu điểm khi học lái xe ô tô hạng C1 tại Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô
                            tô số 4
                        </h1>
                        <hr className="hidden lg:block w-[15%]" />
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h1 className="text-white text-lg font-bold uppercase mb-4">
                                        Đưa chương trình thi vào đào tạo
                                    </h1>
                                    <p className="text-white text-justify">
                                        Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4 là đơn vị đầu tiên
                                        có phương pháp giảng dạy trực quan thông qua nội dung từng bài thi. Học viên
                                        được học tập và thực hành trên xe tập lái giống xe thi.
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-white text-lg font-bold uppercase mb-2">Đội ngũ hỗ trợ</h1>
                                    <p className="text-white text-justify">
                                        Có đội ngũ hỗ trợ học viên trực tiếp và liên tục tại VP đào tạo từ thứ 2 đến thứ
                                        7 hàng tuần.
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-white text-lg font-bold uppercase mb-2">
                                        Không chỉ là học để thi
                                    </h1>
                                    <p className="text-white text-justify">
                                        Học viên sau khi hoàn thành khóa học không chỉ nắm vững kiến thức để thi mà còn
                                        vận dụng vào thực tế để tham gia giao thông an toàn.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div>
                                <img
                                    src={assets.khaiGiangLopHoc}
                                    alt=""
                                    className="rounded-lg w-full h-52 sm:h-64 md:h-72 lg:h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TaiSao />

            <div className="w-full bg-primary-blueOne py-16">
                <div className="w-[90%] lg:w-[80%] mx-auto">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 text-center">
                        <hr className="hidden sm:block w-[19%] border-white" />
                        <h1 className="text-2xl font-bold text-white uppercase">
                            Nội dung khóa học lái xe hạng B (số cơ khí) tại Trung tâm Đào tạo Lái xe
                            <br className="sm:hidden" /> - Công ty Cổ phần Vận tải Ô tô số 4
                        </h1>
                        <hr className="hidden sm:block w-[19%] border-white" />
                    </div>
                    <p className="text-center text-white mb-8 px-2">
                        Giáo trình giảng dạy bám sát nội dung 11 bài thi lái xe Ô tô hạng B (số cơ khí) với mong muốn
                        học viên đạt tỷ lệ đỗ cao nhất.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 1: Xuất phát
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Yêu cầu của bài này là khi xuất phát phải bật đèn xi – nhan trái (với ý nghĩa là xe
                                chuẩn bị đi ra làn đường bên ngoài).
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 2: Dừng xe, nhường đường cho người đi bộ
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Yêu cầu của bài này là dừng xe đúng chỗ trước vạch trắng và đường vằn dành cho người đi
                                bộ
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 3: Dừng và khởi hành xe ngang dốc
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Yêu cầu của bài này là xe không vượt quá vạch quy định, không bị tuột dốc quá 50 cm,
                                phải vượt khỏi dốc trong khoảng thời gian 30 giây.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 4: vệt bánh xe và đường hẹp vuông góc
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Yêu cầu của bài này là hai bánh xe bên phải phải đi lọt qua một đoạn đường có bề rộng
                                khoảng 30-35 cm; Cho xe đi không bị chạm vạch ở gần vỉa hè hai bên đường.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 5: qua ngã tư
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Cũng giống như ở ngoài đường, tại ngã tư này có đèn tín hiệu và bạn chỉ được cho xe qua
                                ngã tư khi có đèn xanh
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 6: đường vòng quanh co
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Yêu cầu của bài này là khi cho xe đi hình chữ S không bị chạm vạch ở gần vỉa hè hai bên
                                đường.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 7: ghép xe dọc vào nơi đỗ
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Yêu cầu của bài này là trong vòng 2 phút bạn phải cho xe lùi được vào nơi đỗ (chuồng),
                                không chạm vạch và tiến ra khỏi chuồng.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 8: tạm dừng ở chỗ có đường sắt chạy qua
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Yêu cầu của bài này là dừng xe đúng chỗ trước vạch trắng và đường vằn dành cho người đi
                                bộ trước đường sắt.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 9: thay đổi số trên đường bằng
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Yêu cầu của bài này là phải lên được số 2 và đạt tốc độ trên 20 km/h trước biển báo 20
                                màu xanh; Về số 1 và giảm tốc độ xuống dưới 20 km/h trước biển báo 20 màu trắng.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 10: ghép xe ngang vào nơi đỗ
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Yêu cầu của bài này là lùi xe vào nơi cần đỗ khi 2 đầu và 1 mặt bên đều bị khóa bởi vật
                                cản hoặc với những xe khác
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Bài 11: KẾT THÚC
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Để kết thúc bài, bạn bật đèn xi-nhan phải khi lái xe qua vạch kết thúc. Bạn không bật
                                đèn xi – nhan sẽ bị trừ 5 điểm.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2 text-sm sm:text-base">
                                Học lý thuyết
                            </h1>
                            <p className="mt-2 text-sm sm:text-base">
                                Học viên học giáo trình chuẩn 5 môn, do Tổng cục Đường bộ Việt Nam ban hành. Được đào
                                tạo bởi giáo viên có kinh nghiệm, kiến thức chuyên sâu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[90%] lg:w-[80%] mx-auto py-16">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="hidden lg:block w-[26%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase text-center">
                        Lợi ích sau khóa học lái xe ô tô hạng C1
                    </h1>
                    <hr className="hidden lg:block w-[26%] border-t-[1px] border-primary-blueOne" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">
                            1. Được đào tạo theo đúng chương trình chuẩn của Bộ GTVT.
                        </h1>
                    </div>
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">
                            2. Nắm vững kiến thức luật giao thông đường bộ cho người điều khiển xe mô tô.
                        </h1>
                    </div>
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">
                            3. Biết cách điều khiển xe mô tô an toàn trong nhiều tình huống thực tế.
                        </h1>
                    </div>
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">
                            4. Được làm quen với các bài thi thực hành trên sân sát hạch tiêu chuẩn.
                        </h1>
                    </div>
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">
                            5. Tự tin tham gia kỳ thi sát hạch và dễ dàng đạt kết quả tốt.
                        </h1>
                    </div>
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">
                            6. Được hỗ trợ tư vấn, giải đáp tận tình từ Trung tâm Đào tạo Lái xe - Công ty CP Vận tải Ô
                            tô số 4.
                        </h1>
                    </div>
                </div>
            </div>

            <div className="w-full bg-primary-blueOne py-16">
                <div className="w-[90%] lg:w-[80%] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8 text-center">
                        <hr className="hidden lg:block w-[39%] border-white" />
                        <h1 className="text-2xl font-bold text-white uppercase">Đội ngũ giáo viên</h1>
                        <hr className="hidden lg:block w-[39%] border-white" />
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-col gap-4 bg-white p-4 rounded-lg">
                                <h1 className="text-primary-blueOne text-lg font-bold uppercase text-center border-b border-primary-blueOne pb-4">
                                    Hơn 200 giáo viên đạt tiêu chuẩn giáo viên dạy <br className="hidden sm:block" />
                                    giỏi do Tổng Cục Đường Bộ tổ chức thi hàng năm
                                </h1>
                                <div className="mt-2 flex flex-col gap-2">
                                    <p>
                                        <span className="font-bold text-primary-blueOne">Trình độ văn hóa: </span>Đội
                                        ngũ giáo viên đạt trình độ văn hóa cao đẳng trở lên.
                                    </p>
                                    <p>
                                        <span className="font-bold text-primary-blueOne">
                                            Kinh nghiệm nghề nghiệp:{' '}
                                        </span>
                                        Tối thiểu 3 năm trong công tác dạy thực hành lái xe.
                                    </p>
                                    <p>
                                        <span className="font-bold text-primary-blueOne">Nghiệp vụ sư phạm: </span>100%
                                        có chứng chỉ sư phạm dạy nghề đã qua đào tạo.
                                    </p>
                                    <p>
                                        <span className="font-bold text-primary-blueOne">Tâm huyết nghề nghiệp: </span>
                                        100% yêu thích, tâm huyết với nghề.
                                    </p>
                                    <p>
                                        <span className="font-bold text-primary-blueOne">Kỹ năng giao tiếp: </span>100%
                                        có kỹ năng giao tiếp và truyền đạt tốt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div>
                                <img
                                    src={assets.giaoVien}
                                    alt=""
                                    className="rounded-lg w-full h-52 sm:h-64 md:h-72 lg:h-[340px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-primary-blueOne py-16">
                <div className="w-[90%] lg:w-[80%] mx-auto">
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <hr className="hidden lg:block w-[35%] border-white" />
                        <h1 className="text-2xl font-bold text-white uppercase text-center">Cảm nhận của học viên</h1>
                        <hr className="hidden lg:block w-[35%] border-white" />
                    </div>
                    <div className="relative">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination]}
                            pagination={{ clickable: true }}
                            loop
                            className="relative z-0 h-full"
                        >
                            {/* Slide 1 */}
                            <SwiperSlide>
                                <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 lg:p-20 text-center flex flex-col lg:flex-row items-center justify-center gap-6">
                                    <div className="w-64 flex justify-center">
                                        <img
                                            src={assets.nguyenDoanhChinh}
                                            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col items-center gap-3">
                                        <div className="text-primary font-semibold text-lg">{'★'.repeat(5)}</div>
                                        <p className="text-lg italic text-[#1a1a1a] max-w-3xl">
                                            Là một nhà báo, quỹ thời gian của tôi luôn rất hạn chế. Nhờ sự linh hoạt và
                                            tận tâm của các thầy cô tại trung tâm, tôi đã hoàn thành khóa học đúng kế
                                            hoạch. Cảm ơn Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4!
                                        </p>
                                        <p className="font-bold text-[#222]">
                                            Nguyễn Doanh Chính{' '}
                                            <span className="font-normal text-sm text-gray-600">/ Nhà báo</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 lg:p-20 text-center flex flex-col lg:flex-row items-center justify-center gap-6">
                                    <div className="w-64 flex justify-center">
                                        <img
                                            src={assets.author1}
                                            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col items-center gap-3">
                                        <div className="text-primary font-semibold text-lg">{'★'.repeat(5)}</div>
                                        <p className="text-lg italic text-[#1a1a1a] max-w-3xl">
                                            Là một giáo viên, tôi luôn coi trọng sự kiên nhẫn và tận tâm. Các thầy cô ở
                                            trung tâm không chỉ giảng dạy dễ hiểu mà còn truyền cho tôi sự tự tin khi
                                            cầm lái.
                                        </p>
                                        <p className="font-bold text-[#222]">
                                            Trần Minh Hạnh{' '}
                                            <span className="font-normal text-sm text-gray-600">/ Giáo viên</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 3 */}
                            <SwiperSlide>
                                <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 lg:p-20 text-center flex flex-col lg:flex-row items-center justify-center gap-6">
                                    <div className="w-64 flex justify-center">
                                        <img
                                            src={assets.author2}
                                            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col items-center gap-3">
                                        <div className="text-primary font-semibold text-lg">{'★'.repeat(5)}</div>
                                        <p className="text-lg italic text-[#1a1a1a] max-w-3xl">
                                            Là một kỹ sư xây dựng, tôi quen với việc xử lý tình huống nhanh. Tuy nhiên,
                                            khi học lái xe, tôi nhận ra tầm quan trọng của sự bình tĩnh và quy tắc giao
                                            thông mà trung tâm đã dạy.
                                        </p>
                                        <p className="font-bold text-[#222]">
                                            Lê Văn Hoàng{' '}
                                            <span className="font-normal text-sm text-gray-600">/ Kỹ sư xây dựng</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 4 */}
                            <SwiperSlide>
                                <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 lg:p-20 text-center flex flex-col lg:flex-row items-center justify-center gap-6">
                                    <div className="w-64 flex justify-center">
                                        <img
                                            src={assets.author3}
                                            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col items-center gap-3">
                                        <div className="text-primary font-semibold text-lg">{'★'.repeat(5)}</div>
                                        <p className="text-lg italic text-[#1a1a1a] max-w-3xl">
                                            Tôi là doanh nhân, thường xuyên phải di chuyển nhiều nơi. Khóa học của trung
                                            tâm giúp tôi nắm vững kỹ năng lái xe an toàn và tiết kiệm thời gian di
                                            chuyển.
                                        </p>
                                        <p className="font-bold text-[#222]">
                                            Phạm Hoàng Long{' '}
                                            <span className="font-normal text-sm text-gray-600">/ Doanh nhân</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        {/* Nút Prev */}
                        <div
                            className="absolute top-40 left-4 -translate-y-1/2 z-10 group w-14 h-14 border-2 rounded-full flex items-center justify-center hover:bg-primary-blueOne/10 transition-colors duration-300 cursor-pointer"
                            onClick={() => swiperRef.current?.swiper?.slidePrev()}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} size="lg" className="text-primary-blueOne" />
                        </div>

                        {/* Nút Next */}
                        <div
                            className="absolute top-40 right-4 -translate-y-1/2 z-10 group w-14 h-14 border-2 rounded-full flex items-center justify-center hover:bg-primary-blueOne/10 transition-colors duration-300 cursor-pointer"
                            onClick={() => swiperRef.current?.swiper?.slideNext()}
                        >
                            <FontAwesomeIcon icon={faChevronRight} size="lg" className="text-primary-blueOne" />
                        </div>
                    </div>
                </div>
            </div>

            <HinhAnhTaiTrungTam />

            <ThamKhaoKhoaHoc />
        </>
    );
}

export default KhoaHocLaiXeOToHangC1;

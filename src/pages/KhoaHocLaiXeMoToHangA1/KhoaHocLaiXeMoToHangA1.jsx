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

function KhoaHocLaiXeMoToHangA1() {
    const swiperRef = useRef(null);

    useEffect(() => {
        document.title = 'Khóa học lái xe mô tô hạng A1';
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
                        <h1 className="text-primary-blueOne">Khóa học lái xe mô tô hạng A1</h1>
                    </div>
                </div>
            </div>
            <div className="w-full bg-primary-blueOne py-16">
                <div className="w-[90%] lg:w-[80%] mx-auto">
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <hr className="hidden lg:block w-[26%] border-white" />
                        <h1 className="text-2xl font-bold text-white uppercase text-center">
                            Nội dung khóa học lái xe mô tô hạng A1
                        </h1>
                        <hr className="hidden lg:block w-[26%] border-white" />
                    </div>
                    <p className="text-center text-white mb-8">
                        Giáo trình bám sát nội dung sát hạch cho hạng A1, nhằm đảm bảo tỉ lệ đạt cao nhất.
                    </p>

                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-primary-blueOne text-xl font-semibold mb-4 uppercase">
                            🧾 Điều kiện & hồ sơ
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Độ tuổi: Từ 18 tuổi (tính đến ngày dự sát hạch).</li>
                            <li>
                                Hồ sơ bao gồm:
                                <ul className="list-disc pl-6">
                                    <li>Đơn đề nghị học – dự sát hạch (theo mẫu).</li>
                                    <li>Giấy khám sức khỏe (theo quy định).</li>
                                    <li>Bản sao CCCD hoặc Hộ chiếu còn hiệu lực.</li>
                                    <li>02 ảnh 3x4 nền xanh theo chuẩn GPLX.</li>
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
                                        <td className="border px-4 py-2 text-center">20</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">2</td>
                                        <td className="border px-4 py-2">Kỹ thuật lái xe</td>
                                        <td className="border px-4 py-2 text-center">4</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">3</td>
                                        <td className="border px-4 py-2">Cấu tạo và sửa chữa thông thường</td>
                                        <td className="border px-4 py-2 text-center">2</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">4</td>
                                        <td className="border px-4 py-2">
                                            Đạo đức, văn hóa giao thông và phòng chống tác hại của rượu, bia
                                        </td>
                                        <td className="border px-4 py-2 text-center">4</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">5</td>
                                        <td className="border px-4 py-2">
                                            Kỹ năng xử lý tình huống giao thông (phần mềm mô phỏng)
                                        </td>
                                        <td className="border px-4 py-2 text-center">2</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">6</td>
                                        <td className="border px-4 py-2">Kỹ năng PCCC và cứu nạn cứu hộ</td>
                                        <td className="border px-4 py-2 text-center">4</td>
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
                                        <th className="border px-4 py-2 text-center">Giờ</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr>
                                        <td className="border px-4 py-2">1</td>
                                        <td className="border px-4 py-2">Thực hành lái xe trên sân tập</td>
                                        <td className="border px-4 py-2 text-center">12</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">2</td>
                                        <td className="border px-4 py-2">Thực hành lái xe trên đường giao thông</td>
                                        <td className="border px-4 py-2 text-center">2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-primary-blueOne text-xl font-semibold mt-8 mb-4 uppercase">
                            ✅ Hoàn thành & kiểm tra
                        </h2>
                        <p>
                            Học viên phải hoàn thành đầy đủ các môn học lý thuyết và thực hành, tham gia kiểm tra cuối
                            khóa đạt yêu cầu để được cấp giấy chứng nhận học xong chương trình, là điều kiện để dự sát
                            hạch.
                        </p>

                        <h2 className="text-primary-blueOne text-xl font-semibold mt-8 mb-4 uppercase">
                            ⏳ Thời gian khóa học
                        </h2>
                        <p>
                            Thời gian khóa học không quá <strong>90 ngày</strong> kể từ ngày khai giảng (bao gồm học,
                            kiểm tra và nghỉ lễ).
                        </p>

                        <h2 className="text-primary-blueOne text-xl font-semibold mt-8 mb-4 uppercase">
                            📍 Địa điểm & hỗ trợ
                        </h2>
                        <p>
                            Học tại Trung tâm Đào tạo Lái xe – Công ty Cổ phần Vận tải Ô tô số 4. Mọi thông tin chi tiết
                            vui lòng liên hệ Phòng Đào tạo hoặc gọi ngay:{' '}
                            <span className="font-semibold">02373.824.988</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[90%] lg:w-[80%] mx-auto py-16">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="hidden lg:block w-[21%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase text-center">
                        5 sai lầm thường gặp khi học lái xe mô tô hạng a1
                    </h1>
                    <hr className="hidden lg:block w-[21%] border-t-[1px] border-primary-blueOne" />
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <div>
                            <img src={assets.gioiThieu} alt="" className="rounded-lg" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <ol className="list-decimal pl-4">
                            <li className="font-semibold my-4">
                                Chủ quan vì nghĩ A1 dễ. Nhiều học viên cho rằng thi A1 đơn giản nên lơ là việc học, đến
                                gần ngày sát hạch mới ôn tập.
                            </li>
                            <li className="font-semibold my-4">
                                Học lý thuyết đối phó. Không nắm vững luật giao thông dẫn đến mất điểm trong phần thi lý
                                thuyết và dễ vi phạm sau khi lấy bằng.
                            </li>
                            <li className="font-semibold my-4">
                                Bỏ qua luyện tập mô phỏng. Mô phỏng tình huống là phần mới trong chương trình nhưng
                                nhiều người bỏ qua, dẫn đến thi trượt.
                            </li>
                            <li className="font-semibold my-4">
                                Lơ là thực hành sân thi. Không tập đủ các tình huống trên sân sa hình dẫn đến tâm lý
                                hoang mang và phạm lỗi khi thi.
                            </li>
                            <li className="font-semibold my-4">
                                Chọn trung tâm không uy tín. Đăng ký học nơi không rõ ràng về lịch học, cơ sở vật chất
                                hoặc không hỗ trợ tận tình khiến việc học bị gián đoạn.
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
                            Ưu điểm khi học lái xe mô tô hạng A1 tại Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải
                            Ô tô số 4
                        </h1>
                        <hr className="hidden lg:block w-[15%]" />
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-col gap-4 text-white">
                                <h1 className="text-xl font-bold uppercase">Chương trình đào tạo sát thực tế</h1>
                                <p>
                                    Chúng tôi xây dựng chương trình học bám sát nội dung thi sát hạch A1, kết hợp giữa
                                    lý thuyết, mô phỏng và thực hành giúp học viên tự tin khi thi và khi tham gia giao
                                    thông thực tế.
                                </p>

                                <h1 className="text-xl font-bold uppercase">Đội ngũ giảng viên & hỗ trợ tận tâm</h1>
                                <p>
                                    Trung tâm có đội ngũ giáo viên giàu kinh nghiệm, hướng dẫn tận tình. Bộ phận hỗ trợ
                                    làm việc liên tục từ thứ 2 đến thứ 7 để giải đáp mọi thắc mắc của học viên.
                                </p>

                                <h1 className="text-xl font-bold uppercase">Học để sử dụng lâu dài</h1>
                                <p>
                                    Không chỉ học để thi, chúng tôi chú trọng trang bị kiến thức luật giao thông và kỹ
                                    năng lái xe an toàn trên đường trường, giúp học viên tự tin điều khiển xe sau khi có
                                    bằng.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div>
                                <img
                                    src={assets.gioiThieu}
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
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <hr className="hidden lg:block w-[19%] border-white" />
                        <h1 className="text-2xl font-bold text-white uppercase text-center">
                            Nội dung khóa học lái xe mô tô hạng A1 tại Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận
                            tải Ô tô số 4
                        </h1>
                        <hr className="hidden lg:block w-[19%] border-white" />
                    </div>
                    <p className="text-center text-white mb-8">
                        Chương trình đào tạo lái xe mô tô hạng A1 được xây dựng theo Thông tư 35/2024/TT-BGTVT, gồm cả
                        lý thuyết và thực hành nhằm đảm bảo học viên đủ điều kiện thi và lái xe an toàn.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                1. Lý thuyết
                            </h1>
                            <p className="mt-2">
                                Học viên sẽ được học các môn: Luật giao thông đường bộ, kỹ thuật lái xe mô tô, cấu tạo
                                và sửa chữa xe đơn giản, nghiệp vụ vận tải. Tổng số giờ học lý thuyết:{' '}
                                <strong>12 giờ</strong>.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                2. Thực hành lái xe
                            </h1>
                            <p className="mt-2">
                                Học viên được học kỹ năng điều khiển xe mô tô, xử lý tình huống trên sân tập tiêu chuẩn.
                                Tổng số giờ học thực hành: <strong>8 giờ</strong>.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                3. Nội dung thi thực hành
                            </h1>
                            <p className="mt-2">
                                Học viên sẽ thi thực hành trên sân với 4 bài thi bắt buộc:
                                <br />– Đi vòng số 8
                                <br />– Đi đường hẹp hình chữ nhật
                                <br />– Đi qua vạch cản
                                <br />– Đi qua đường gồ ghề
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                4. Mục tiêu khóa học
                            </h1>
                            <p className="mt-2">
                                Sau khi hoàn thành khóa học, học viên sẽ có kiến thức, kỹ năng điều khiển xe mô tô an
                                toàn, tuân thủ luật giao thông và đủ điều kiện để tham dự kỳ thi sát hạch cấp bằng lái
                                A1.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[90%] lg:w-[80%] mx-auto py-16">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="hidden lg:block w-[20%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase text-center">
                        Đăng ký khu vực học lái xe mô tô hạng a1 gần nhất
                    </h1>
                    <hr className="hidden lg:block w-[20%] border-t-[1px] border-primary-blueOne" />
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <div>
                            <img src={assets.gioiThieu} alt="" className="rounded-lg w-full h-64 object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <ol className="list-decimal pl-4">
                            <li className="font-semibold my-4">Sân Thành Đô - Nhổn</li>
                            <li className="font-semibold my-4">Sân Hồng Anh - Ngõ 785 Nguyễn Khoái</li>
                            <li className="font-semibold my-4">Sân Ngọc Hà - Đê Chèm - Bắc Từ Liêm</li>
                            <li className="font-semibold my-4">Sân Nguyễn Xiển - Thanh Xuân</li>
                            <li className="font-semibold my-4">Sân Chúc Sơn - Chương Mỹ</li>
                        </ol>
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
                                        <span className="font-bold text-primary-blueOne">Độ tuổi: </span>Đội ngũ giáo
                                        viên trẻ, nhiệt huyết, yêu nghề.
                                    </p>
                                    <p>
                                        <span className="font-bold text-primary-blueOne">Trình độ văn hóa: </span>Đa
                                        phần giáo viên đạt trình độ văn hóa Cao đẳng trở lên.
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
                                    src={assets.gioiThieu}
                                    alt=""
                                    className="rounded-lg w-full h-52 sm:h-64 md:h-72 lg:h-[340px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[90%] lg:w-[80%] mx-auto py-16">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="hidden lg:block w-[26%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase text-center">
                        Lợi ích sau khóa học lái xe mô tô hạng A1
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
                            <SwiperSlide>
                                <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 lg:p-20 text-center flex flex-col lg:flex-row items-center justify-center gap-6">
                                    <div className="w-64 flex justify-center">
                                        <img
                                            src={assets.nguyenDoanhChinh}
                                            className="w-40 h-w-40 object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col items-center gap-3">
                                        <div className="text-primary font-semibold text-lg">{'★'.repeat(5)}</div>
                                        <p className="text-lg italic text-[#1a1a1a] max-w-3xl">
                                            Tôi là Nhà Báo, công việc của tôi rất bận rộn nên việc xếp lịch học vô cùng
                                            khó khăn. Các thầy ở trung tâm “chiều” tôi hết mức. Cảm ơn thầy Đỉnh, cảm ơn
                                            Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4
                                        </p>
                                        <p className="font-bold text-[#222]">
                                            Nguyễn Doanh Chính{' '}
                                            <span className="font-normal text-sm text-gray-600">/ Nhà báo</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 lg:p-20 text-center flex flex-col lg:flex-row items-center justify-center gap-6">
                                    <div className="w-64 flex justify-center">
                                        <img
                                            src={assets.nguyenDoanhChinh}
                                            className="w-40 h-w-40 object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col items-center gap-3">
                                        <div className="text-primary font-semibold text-lg">{'★'.repeat(5)}</div>
                                        <p className="text-lg italic text-[#1a1a1a] max-w-3xl">
                                            Tôi là Nhà Báo, công việc của tôi rất bận rộn nên việc xếp lịch học vô cùng
                                            khó khăn. Các thầy ở trung tâm “chiều” tôi hết mức. Cảm ơn thầy Đỉnh, cảm ơn
                                            Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4
                                        </p>
                                        <p className="font-bold text-[#222]">
                                            Nguyễn Doanh Chính{' '}
                                            <span className="font-normal text-sm text-gray-600">/ Nhà báo</span>
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

export default KhoaHocLaiXeMoToHangA1;

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import config from '@/configs';
import { assets } from '@/assets/assets';
import TaiSao from '@/components/TaiSao';
import { useRef } from 'react';
import HinhAnhTaiTrungTam from '@/components/HinhAnhTaiTrungTam';

function KhoaNangHangDLenE() {
    const swiperRef = useRef(null);

    return (
        <>
            <div className="w-full bg-[#f4f4f4] py-4">
                <div className="w-[80%] mx-auto">
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <Link to={config.routes.home}>
                            <h1>Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" className="mt-1" />
                        <h1 className="text-primary-blueOne">Khóa học nâng hạng D - E</h1>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto py-16">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="w-[17%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase">
                        5 sai lầm thường gặp khi học khóa nâng hạng D - E
                    </h1>
                    <hr className="w-[17%] border-t-[1px] border-primary-blueOne" />
                </div>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <div>
                            <img src={assets.gioiThieu} alt="" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="w-1/2">
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
                <div className="w-[80%] mx-auto">
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <hr className="w-[15%]" />
                        <h1 className="text-2xl font-bold text-white uppercase">
                            Khóa nâng hạng D - E tại LOD có những ưu điểm gì
                        </h1>
                        <hr className="w-[15%]" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-1/2">
                            <div className="flex flex-col gap-4 text-white">
                                <h1 className="text-xl font-bold uppercase">Đưa chương trình thi vào đào tạo</h1>
                                <p>
                                    LOD là trung tâm đầu tiên có phương pháp giảng dạy trực quan thông qua nội dung tưng
                                    bài thi. Học viên học trên xe tập lái như học trên xe thi – Là đơn vị có tỷ lệ đỗ
                                    cao nhất tại Hà Nội.
                                </p>
                                <h1 className="text-xl font-bold uppercase">Đội ngũ hỗ trợ</h1>
                                <p>
                                    Tự hào là đơn vị DUY NHẤT tại Hà Nội có đội ngũ hỗ trợ học viên trực tiếp và liên
                                    tục tại văn phòng đào tạo từ thứ 2 đến thứ 7 hàng tuần.
                                </p>
                                <h1 className="text-xl font-bold uppercase">Không chỉ là học để thi</h1>
                                <p>
                                    Ngoài nội dung đào tạo chuyên sâu bám sát nội dung 11 bài thi. Trung tâm LOD còn
                                    hướng bạn tới những kỹ năng lái tốt và am hiểu luật khi tham gia giao thông.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div>
                                <img src={assets.gioiThieu} alt="" className="rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TaiSao />
            <div className="w-full bg-primary-blueOne py-16">
                <div className="w-[80%] mx-auto">
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <hr className="w-[19%]" />
                        <h1 className="text-2xl font-bold text-white uppercase">
                            Nội dung khóa học nâng hạng D - E tại LOD
                        </h1>
                        <hr className="w-[19%]" />
                    </div>
                    <p className="text-center text-white mb-8">
                        Giáo trình giảng dạy bám sát nội dung 11 bài thi lái xe Ô tô hạng C với mong muốn học viên đạt
                        tỷ lệ đỗ cao nhất.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 1: Xuất phát
                            </h1>
                            <p className="mt-2">
                                Yêu cầu của bài này là khi xuất phát phải bật đèn xi – nhan trái (với ý nghĩa là xe
                                chuẩn bị đi ra làn đường bên ngoài).
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 2: Dừng xe, nhường đường cho người đi bộ
                            </h1>
                            <p className="mt-2">
                                Yêu cầu của bài này là dừng xe đúng chỗ trước vạch trắng và đường vằn dành cho người đi
                                bộ
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 3: Dừng và khởi hành xe ngang dốc
                            </h1>
                            <p className="mt-2">
                                Yêu cầu của bài này là xe không vượt quá vạch quy định, không bị tuột dốc quá 50 cm,
                                phải vượt khỏi dốc trong khoảng thời gian 30 giây.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 4: vệt bánh xe và đường hẹp vuông góc
                            </h1>
                            <p className="mt-2">
                                Yêu cầu của bài này là hai bánh xe bên phải phải đi lọt qua một đoạn đường có bề rộng
                                khoảng 30-35 cm; Cho xe đi không bị chạm vạch ở gần vỉa hè hai bên đường.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 5: qua ngã tư
                            </h1>
                            <p className="mt-2">
                                Cũng giống như ở ngoài đường, tại ngã tư này có đèn tín hiệu và bạn chỉ được cho xe qua
                                ngã tư khi có đèn xanh
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 6: đường vòng quanh co
                            </h1>
                            <p className="mt-2">
                                Yêu cầu của bài này là khi cho xe đi hình chữ S không bị chạm vạch ở gần vỉa hè hai bên
                                đường.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 7: ghép xe dọc vào nơi đỗ
                            </h1>
                            <p className="mt-2">
                                Yêu cầu của bài này là trong vòng 2 phút bạn phải cho xe lùi được vào nơi đỗ (chuồng),
                                không chạm vạch và tiến ra khỏi chuồng.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 8: tạm dừng ở chỗ có đường sắt chạy qua
                            </h1>
                            <p className="mt-2">
                                Yêu cầu của bài này là dừng xe đúng chỗ trước vạch trắng và đường vằn dành cho người đi
                                bộ trước đường sắt.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 9: thay đổi số trên đường bằng
                            </h1>
                            <p className="mt-2">
                                Yêu cầu của bài này là phải lên được số 2 và đạt tốc độ trên 20 km/h trước biển báo 20
                                màu xanh; Về số 1 và giảm tốc độ xuống dưới 20 km/h trước biển báo 20 màu trắng.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 10: ghép xe ngang vào nơi đỗ
                            </h1>
                            <p className="mt-2">
                                Yêu cầu của bài này là lùi xe vào nơi cần đỗ khi 2 đầu và 1 mặt bên đều bị khóa bởi vật
                                cản hoặc với những xe khác
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Bài 11: KẾT THÚC
                            </h1>
                            <p className="mt-2">
                                Để kết thúc bài, bạn bật đèn xi-nhan phải khi lái xe qua vạch kết thúc. Bạn không bật
                                đèn xi – nhan sẽ bị trừ 5 điểm.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h1 className="text-primary-blueOne font-bold uppercase border-b border-primary-blueOne pb-2">
                                Học lý thuyết
                            </h1>
                            <p className="mt-2">
                                Học viên học giáo trình chuẩn 5 môn, do Tổng cục Đường bộ Việt Nam ban hành. Được đào
                                tạo bởi giáo viên có kinh nghiệm, kiến thức chuyên sâu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto py-16">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="w-[16%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase">
                        Đăng ký khu vực học nâng hạng D - E gần nhất
                    </h1>
                    <hr className="w-[16%] border-t-[1px] border-primary-blueOne" />
                </div>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <div>
                            <img src={assets.gioiThieu} alt="" className="rounded-lg w-full h-64 object-cover" />
                        </div>
                    </div>
                    <div className="w-1/2">
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
                <div className="w-[80%] mx-auto">
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <hr className="w-[39%]" />
                        <h1 className="text-2xl font-bold text-white uppercase">Đội ngũ giáo viên</h1>
                        <hr className="w-[39%]" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-1/2">
                            <div className="flex flex-col gap-4 bg-white p-4 rounded-lg">
                                <h1 className="text-primary-blueOne text-lg font-bold uppercase text-center border-b border-primary-blueOne pb-4">
                                    Hơn 200 giáo viên đạt tiêu chuẩn giáo viên dạy <br /> giỏi do Tổng Cục Đường Bộ tổ
                                    chức thi hàng năm
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
                        <div className="w-1/2">
                            <div>
                                <img src={assets.gioiThieu} alt="" className="rounded-lg w-full h-[340px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto py-16">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="w-[22%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase">
                        Lợi ích sau khóa học nâng hạng D - E
                    </h1>
                    <hr className="w-[22%] border-t-[1px] border-primary-blueOne" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">1. Thi đỗ và có bằng lái xe sau gần 3 tháng học tập.</h1>
                    </div>
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">2. Nắm vững các kiến thức luật Giao thông Đường bộ.</h1>
                    </div>
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">
                            3. Lái xe tốt, an toàn khi tham gia giao thông mà không cần bổ túc tay lái sau khóa học.
                        </h1>
                    </div>
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">
                            4. Nắm cơ bản cơ chế hoạt động, cấu tạo của Ô tô đề phòng những tình huống khi lái xe trên
                            đường.
                        </h1>
                    </div>
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">
                            5. Nắm vững nội dung học và thi. Học viên có thể hướng dẫn kiến thức cơ bản khi thi cho bạn
                            bè.
                        </h1>
                    </div>
                    <div className="bg-primary-blueOne p-4 rounded-lg min-h-[72px] flex items-center">
                        <h1 className="text-white font-medium">
                            6. Ngoài ra LOD còn hỗ trợ tất cả các học viên mọi vấn đề sau khi kết thúc khóa học.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-full bg-primary-blueOne py-16">
                <div className="w-[80%] mx-auto">
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <hr className="w-[35%]" />
                        <h1 className="text-2xl font-bold text-white uppercase">Cảm nhận của học viên</h1>
                        <hr className="w-[35%]" />
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
                                <div className="bg-white rounded-xl shadow-lg p-20 text-center flex items-center justify-center gap-4">
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
                                            khó khăn. Các thầy ở trung tâm “Chiều” tôi hết mức. Cảm ơn thầy Đỉnh, Cảm ơn
                                            Trung tâm đào tạo lái xe LOD
                                        </p>
                                        <p className="font-bold text-[#222]">
                                            Nguyễn Doanh Chính{' '}
                                            <span className="font-normal text-sm text-gray-600">/ Nhà báo</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-white rounded-xl shadow-lg p-20 text-center flex items-center justify-center gap-4">
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
                                            khó khăn. Các thầy ở trung tâm “Chiều” tôi hết mức. Cảm ơn thầy Đỉnh, Cảm ơn
                                            Trung tâm đào tạo lái xe LOD
                                        </p>
                                        <p className="font-bold text-[#222]">
                                            Nguyễn Doanh Chính{' '}
                                            <span className="font-normal text-sm text-gray-600">/ Nhà báo</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-white rounded-xl shadow-lg p-20 text-center flex items-center justify-center gap-4">
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
                                            khó khăn. Các thầy ở trung tâm “Chiều” tôi hết mức. Cảm ơn thầy Đỉnh, Cảm ơn
                                            Trung tâm đào tạo lái xe LOD
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
            <div className="w-full bg-primary-blueOne py-16">
                <div className="w-[80%] mx-auto">
                    <div className="flex justify-center items-center gap-4 mb-16">
                        <hr className="w-[25%]" />
                        <h1 className="text-2xl font-bold text-white uppercase">
                            Tham khảo thêm khóa học lái xe các hạng
                        </h1>
                        <hr className="w-[25%]" />
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <div className="p-[10px] bg-white rounded-t-lg">
                                <h1 className="text-2xl font-bold uppercase text-center text-primary-blueOne">
                                    Khóa học hạng B1
                                </h1>
                            </div>
                            <img src={assets.khoaHocB1} alt="" className="w-full h-52 object-cover" />
                            <div className="p-3 flex flex-col gap-2 bg-white rounded-b-lg">
                                <p>
                                    Ưu đãi: <span className="text-primary-blueOne">Giảm 500k</span> khi đăng ký online
                                </p>
                                <p>Đăng ký chỉ cần CMT</p>
                                <p>
                                    Học phí: <span className="text-primary-blueOne">trọn gói 100%</span>
                                </p>
                                <p>Học 1 thầy 1 trò</p>
                                <p>Học gần nhà, thời gian linh hoạt</p>
                                <p>Thời gian đào tạo và thi: 2.5 tháng</p>
                                <p className="font-bold text-primary-blueOne">Đăng ký khóa B1 chỉ 17 triệu</p>
                                <p>Giảm 100k/HV khi đăng ký nhóm</p>
                                <p>Có chương trình nâng cao</p>
                                <p className="text-center">
                                    Cam kết <b className="text-primary-blueOne">KHÔNG</b> phát sinh thêm chi phí
                                </p>
                                <div className="flex justify-center border-t pt-4">
                                    <Link to={config.routes.HocLaiXeOToHangB1} className="w-full">
                                        <button className="bg-primary-blueOne text-white font-bold uppercase w-full px-6 py-2 rounded-full hover:bg-primary-blueTwo duration-300">
                                            Chi tiết
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="p-[10px] bg-white rounded-t-lg">
                                <h1 className="text-2xl font-bold uppercase text-center text-primary-blueOne">
                                    Khóa học hạng C
                                </h1>
                            </div>
                            <img src={assets.khoaHocC} alt="" className="w-full h-52 object-cover" />
                            <div className="p-3 flex flex-col gap-2 bg-white rounded-b-lg">
                                <p>
                                    Ưu đãi: <span className="text-primary-blueOne">Giảm 500k</span> khi đăng ký online
                                </p>
                                <p>Đăng ký chỉ cần CMT</p>
                                <p>
                                    Học phí: <span className="text-primary-blueOne">trọn gói 100%</span>
                                </p>
                                <p>Học 1 thầy 1 trò</p>
                                <p>Học gần nhà, thời gian linh hoạt</p>
                                <p>Thời gian đào tạo và thi: 3.0 tháng</p>
                                <p className="font-bold text-primary-blueOne">Đăng ký khóa C chỉ 16 triệu</p>
                                <p>Giảm 100k/HV khi đăng ký nhóm</p>
                                <p>Có chương trình nâng cao</p>
                                <p className="text-center">
                                    Cam kết <b className="text-primary-blueOne">KHÔNG</b> phát sinh thêm chi phí
                                </p>
                                <div className="flex justify-center border-t pt-4">
                                    <Link to={config.routes.HocLaiXeOToHangC} className="w-full">
                                        <button className="bg-primary-blueOne text-white font-bold uppercase w-full px-6 py-2 rounded-full hover:bg-primary-blueTwo duration-300">
                                            Chi tiết
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="p-[10px] bg-white rounded-t-lg">
                                <h1 className="text-2xl font-bold uppercase text-center text-primary-blueOne">
                                    Khóa học hạng C
                                </h1>
                            </div>
                            <img src={assets.khoaHocC} alt="" className="w-full h-52 object-cover" />
                            <div className="p-3 flex flex-col gap-2 bg-white rounded-b-lg">
                                <p>
                                    Ưu đãi: <span className="text-primary-blueOne">Giảm 500k</span> khi đăng ký online
                                </p>
                                <p>Đăng ký chỉ cần CMT</p>
                                <p>
                                    Học phí: <span className="text-primary-blueOne">trọn gói 100%</span>
                                </p>
                                <p>Học 1 thầy 1 trò</p>
                                <p>Học gần nhà, thời gian linh hoạt</p>
                                <p>Thời gian đào tạo và thi: 5.0 tháng</p>
                                <p className="font-bold text-primary-blueOne">Đăng ký khóa C chỉ 19.8 triệu</p>
                                <p>Giảm 100k/HV khi đăng ký nhóm</p>
                                <p>Có chương trình nâng cao</p>
                                <p className="text-center">
                                    Cam kết <b className="text-primary-blueOne">KHÔNG</b> phát sinh thêm chi phí
                                </p>
                                <div className="flex justify-center border-t pt-4">
                                    <Link to={config.routes.HocLaiXeOToHangC} className="w-full">
                                        <button className="bg-primary-blueOne text-white font-bold uppercase w-full px-6 py-2 rounded-full hover:bg-primary-blueTwo duration-300">
                                            Chi tiết
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KhoaNangHangDLenE;

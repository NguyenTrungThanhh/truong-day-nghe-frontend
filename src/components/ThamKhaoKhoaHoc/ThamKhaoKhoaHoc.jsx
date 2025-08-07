import { Link, useLocation } from 'react-router-dom';
import { assets } from '@/assets/assets';
import config from '@/configs';

const ThamKhaoKhoaHoc = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const allCourses = [
        {
            name: 'Khoá học lái xe mô tô hạng A1',
            image: assets.khoaHocB1,
            route: config.routes.KhoaHocLaiXeMoToHangA1,
            duration: '2.0 tháng',
            price: 'Chỉ từ 4.5 triệu',
        },
        {
            name: 'Khóa học lái xe ô tô hạng B ( số tự động )',
            image: assets.khoaHocB1,
            route: config.routes.KhoaHocLaiXeOToHangBSoTuDong,
            duration: '2.5 tháng',
            price: 'Chỉ 17 triệu',
        },
        {
            name: 'Khóa học lái xe ô tô hạng B ( số cơ khí )',
            image: assets.khoaHocB2,
            route: config.routes.KhoaHocLaiXeOToHangBSoCoKhi,
            duration: '3.0 tháng',
            price: 'Chỉ 16 triệu',
        },
        {
            name: 'Khóa học lái xe ô tô hạng C1',
            image: assets.khoaHocC,
            route: config.routes.KhoaHocLaiXeOToHangC1,
            duration: '5.0 tháng',
            price: 'Chỉ 19.8 triệu',
        },
        {
            name: 'Khóa học lái xe ô tô nâng hạng C',
            image: assets.khoaHocC,
            route: config.routes.KhoaHocLaiXeOToNangHangC,
            duration: '5.0 tháng',
            price: 'Chỉ 19.8 triệu',
        },
    ];

    const filteredCourses = allCourses.filter((course) => course.route !== currentPath);

    return (
        <div className="w-full bg-primary-blueOne py-16">
            <div className="w-[80%] mx-auto">
                <div className="flex justify-center items-center gap-4 mb-16">
                    <hr className="hidden lg:block w-[25%] border-white" />
                    <h1 className="text-2xl font-bold text-white uppercase text-center">
                        Tham khảo thêm khóa học lái xe các hạng
                    </h1>
                    <hr className="hidden lg:block w-[25%] border-white" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredCourses.map((course, index) => (
                        <div key={index}>
                            <div className="p-[10px] bg-white rounded-t-lg h-[80px] flex items-center justify-center text-center">
                                <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold uppercase text-primary-blueOne leading-tight">
                                    {course.name}
                                </h1>
                            </div>
                            <img src={course.image} alt={course.name} className="w-full h-52 object-cover" />
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
                                <p>Thời gian đào tạo và thi: {course.duration}</p>
                                <p className="font-bold text-primary-blueOne">{course.price}</p>
                                <p>Giảm 100k/HV khi đăng ký nhóm</p>
                                <p>Có chương trình nâng cao</p>
                                <p className="text-center">
                                    Cam kết <b className="text-primary-blueOne">KHÔNG</b> phát sinh thêm chi phí
                                </p>
                                <div className="flex justify-center border-t pt-4">
                                    <Link to={course.route} className="w-full">
                                        <button className="bg-primary-blueOne text-white font-bold uppercase w-full px-6 py-2 rounded-full hover:bg-primary-blueTwo duration-300">
                                            Chi tiết
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThamKhaoKhoaHoc;

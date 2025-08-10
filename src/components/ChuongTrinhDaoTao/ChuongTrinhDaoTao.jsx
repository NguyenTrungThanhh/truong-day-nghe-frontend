import { assets } from '@/assets/assets';
import config from '@/configs';
import { Link } from 'react-router-dom';

const allCourses = [
    {
        name: 'Khoá học lái xe mô tô hạng A1',
        image: assets.khoaHocB1,
        route: config.routes.KhoaHocLaiXeMoToHangA1,
    },
    {
        name: 'Khóa học lái xe ô tô hạng B ( số tự động )',
        image: assets.khoaHocB1,
        route: config.routes.KhoaHocLaiXeOToHangBSoTuDong,
    },
    {
        name: 'Khóa học lái xe ô tô hạng B ( số cơ khí )',
        image: assets.khoaHocB2,
        route: config.routes.KhoaHocLaiXeOToHangBSoCoKhi,
    },
    {
        name: 'Khóa học lái xe ô tô hạng C1',
        image: assets.khoaHocC,
        route: config.routes.KhoaHocLaiXeOToHangC1,
    },
    {
        name: 'Khóa học lái xe ô tô nâng hạng C',
        image: assets.khoaHocC,
        route: config.routes.KhoaHocLaiXeOToNangHangC,
    },
];

function ChuongTrinhDaoTao() {
    return (
        <div className="w-full bg-primary-blueOne py-16">
            <div className="w-[90%] lg:w-[80%] mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6 text-center">
                    <hr className="hidden lg:block w-[29%] border-white" />
                    <h1 className="text-2xl font-bold text-white uppercase text-center">
                        Chương trình đào tạo bằng lái xe
                    </h1>
                    <hr className="hidden lg:block w-[29%] border-white" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allCourses.map((course, index) => (
                        <div key={index}>
                            <div className="p-[10px] bg-white rounded-t-lg h-[80px] flex items-center justify-center text-center">
                                <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold uppercase text-primary-blueOne leading-tight">
                                    {course.name}
                                </h1>
                            </div>
                            <img src={course.image} alt={course.name} className="w-full h-52 object-cover" />
                            <div className="flex justify-center border-t pt-4 bg-white px-2 rounded-b-lg">
                                <Link to={course.route} className="w-full">
                                    <button className="bg-primary-blueOne text-white font-bold uppercase w-full px-6 py-2 mb-4 rounded-full hover:bg-primary-blueTwo duration-300">
                                        Chi tiết
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChuongTrinhDaoTao;

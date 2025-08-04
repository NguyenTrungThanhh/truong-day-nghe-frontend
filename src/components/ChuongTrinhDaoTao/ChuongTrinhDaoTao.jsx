import { assets } from '@/assets/assets';
import { Link } from 'react-router-dom';

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
                    {[1, 2, 3, 4, 5, 6].map((_, index) => {
                        const data = [
                            {
                                name: 'B1',
                                img: assets.khoaHocB1,
                                price: '17 triệu',
                                time: '2.5 tháng',
                            },
                            {
                                name: 'B2',
                                img: assets.khoaHocB2,
                                price: '16 triệu',
                                time: '3.0 tháng',
                            },
                            {
                                name: 'C',
                                img: assets.khoaHocC,
                                price: '19.8 triệu',
                                time: '5.0 tháng',
                            },
                        ][index % 3];

                        return (
                            <div key={index}>
                                <div className="p-[10px] bg-white rounded-t-lg">
                                    <h1 className="text-2xl font-bold uppercase text-center text-primary-blueOne">
                                        Khóa học hạng {data.name}
                                    </h1>
                                </div>
                                <img src={data.img} alt="" className="w-full h-52 object-cover" />
                                <div className="p-3 flex flex-col gap-2 bg-white rounded-b-lg">
                                    <p>
                                        Ưu đãi: <span className="text-primary-blueOne">Giảm 500k</span> khi đăng ký
                                        online
                                    </p>
                                    <p>Đăng ký chỉ cần CMT</p>
                                    <p>
                                        Học phí: <span className="text-primary-blueOne">trọn gói 100%</span>
                                    </p>
                                    <p>Học 1 thầy 1 trò</p>
                                    <p>Học gần nhà, thời gian linh hoạt</p>
                                    <p>Thời gian đào tạo và thi: {data.time}</p>
                                    <p className="font-bold text-primary-blueOne">
                                        Đăng ký khóa {data.name} chỉ {data.price}
                                    </p>
                                    <p>Giảm 100k/HV khi đăng ký nhóm</p>
                                    <p>Có chương trình nâng cao</p>
                                    <p className="text-center">
                                        Cam kết <b className="text-primary-blueOne">KHÔNG</b> phát sinh thêm chi phí
                                    </p>
                                    <div className="flex justify-center border-t pt-4">
                                        <Link className="w-full">
                                            <button className="bg-primary-blueOne text-white font-bold uppercase w-full px-6 py-2 rounded-full hover:bg-primary-blueTwo duration-300">
                                                Chi tiết
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ChuongTrinhDaoTao;

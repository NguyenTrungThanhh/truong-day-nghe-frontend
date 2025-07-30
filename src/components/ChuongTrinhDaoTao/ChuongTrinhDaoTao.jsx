import { assets } from '@/assets/assets';
import { Link } from 'react-router-dom';

function ChuongTrinhDaoTao() {
    return (
        <div className="w-full bg-primary-blueOne py-16">
            <div className="w-[80%] mx-auto">
                <div className="flex justify-center items-center gap-4 mb-6">
                    <hr className="w-[29%]" />
                    <h1 className="text-2xl font-bold text-white uppercase">Chương trình đào tạo bằng lái xe</h1>
                    <hr className="w-[29%]" />
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
                                <Link className="w-full">
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
                                Khóa học hạng B2
                            </h1>
                        </div>
                        <img src={assets.khoaHocB2} alt="" className="w-full h-52 object-cover" />
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
                            <p className="font-bold text-primary-blueOne">Đăng ký khóa B2 chỉ 16 triệu</p>
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
                                <Link className="w-full">
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
                                <Link className="w-full">
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
                                Khóa học hạng B2
                            </h1>
                        </div>
                        <img src={assets.khoaHocB2} alt="" className="w-full h-52 object-cover" />
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
                            <p className="font-bold text-primary-blueOne">Đăng ký khóa B2 chỉ 16 triệu</p>
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
                                <Link className="w-full">
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
    );
}

export default ChuongTrinhDaoTao;

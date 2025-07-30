import { assets } from '@/assets/assets';

function HinhAnhTaiTrungTam() {
    return (
        <div className="w-full py-16">
            <div className="w-[80%] mx-auto">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="w-[33%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase">Các hình ảnh tại trung tâm</h1>
                    <hr className="w-[33%] border-t-[1px] border-primary-blueOne" />
                </div>
                <div className="grid grid-cols-4 gap-8">
                    <div>
                        <img src={assets.tuVanCacKhoaHoc} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Tư vấn các Khóa học</p>
                    </div>
                    <div>
                        <img src={assets.khaiGiangLopHoc} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Khai giảng lớp học</p>
                    </div>
                    <div>
                        <img src={assets.khoaHocB1} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Sân tập lái xe</p>
                    </div>
                    <div>
                        <img src={assets.gioiThieu} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Xe tập lái của Trung tâm</p>
                    </div>
                    <div>
                        <img src={assets.khoaHocB2} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Thầy giáo của trung tâm</p>
                    </div>
                    <div>
                        <img src={assets.khoaHocB2} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Hướng dẫn học viên</p>
                    </div>
                    <div>
                        <img src={assets.khoaHocB2} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Học lái xe vào buổi tối</p>
                    </div>
                    <div>
                        <img src={assets.khoaHocB2} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Hoạt động ngoại khóa</p>
                    </div>
                    <div>
                        <img src={assets.khoaHocB2} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Phòng chờ trung tâm</p>
                    </div>
                    <div>
                        <img src={assets.khoaHocB2} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Phòng học lý thuyết</p>
                    </div>
                    <div>
                        <img src={assets.khoaHocB2} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">Hồ sơ đã đỗ</p>
                    </div>
                    <div>
                        <img src={assets.khoaHocB2} alt="" className="rounded-lg w-full h-48 object-cover" />
                        <p className="my-2 text-center text-primary-blueOne font-medium">
                            Học viên nhận bằng tại trung tâm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HinhAnhTaiTrungTam;

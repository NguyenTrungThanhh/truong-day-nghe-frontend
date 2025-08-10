import { assets } from '@/assets/assets';

function HinhAnhTaiTrungTam() {
    return (
        <div className="w-full py-16">
            <div className="w-[90%] lg:w-[80%] mx-auto">
                {/* Title */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8 text-center">
                    <hr className="hidden lg:block w-[33%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase">Các hình ảnh tại trung tâm</h1>
                    <hr className="hidden lg:block w-[33%] border-t-[1px] border-primary-blueOne" />
                </div>

                {/* Image grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                        { img: assets.tuVanCacKhoaHoc, text: 'Tư vấn các Khóa học' },
                        { img: assets.khaiGiangLopHoc, text: 'Khai giảng lớp học' },
                        { img: assets.sanTruong1, text: 'Sân tập lái xe' },
                        { img: assets.danXeTapLai, text: 'Xe tập lái của Trung tâm' },
                        { img: assets.giaoVien, text: 'Thầy giáo của trung tâm' },
                        { img: assets.khoaHocB2, text: 'Hướng dẫn học viên' },
                        { img: assets.hocLyThuyet, text: 'Phòng học lý thuyết' },
                        { img: assets.bangOTrungTam, text: 'Hồ sơ đã đỗ' },
                    ].map((item, idx) => (
                        <div key={idx}>
                            <img src={item.img} alt="" className="rounded-lg w-full h-48 object-cover" />
                            <p className="my-2 text-center text-primary-blueOne font-medium">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HinhAnhTaiTrungTam;

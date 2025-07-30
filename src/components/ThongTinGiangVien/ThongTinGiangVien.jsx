import { assets } from '@/assets/assets';

function ThongTinGiangVien() {
    return (
        <div className="w-full py-16">
            <div className="w-[80%] mx-auto">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="w-[37%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase">Thông tin giảng viên</h1>
                    <hr className="w-[37%] border-t-[1px] border-primary-blueOne" />
                </div>
            </div>
            <div className="w-[80%] mx-auto">
                <div className="p-4 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                    <div className="flex gap-8">
                        <div className="w-[25%]">
                            <div className="flex flex-col gap-4">
                                <img src={assets.gioiThieu} alt="" />
                                <img src={assets.gioiThieu} alt="" />
                            </div>
                        </div>
                        <div className="w-[75%]">
                            <h1 className="font-bold text-primary-blueOne uppercase text-lg text-center py-4">
                                Hơn 200 giáo viên đạt tiêu chuẩn{' '}
                                <span className="text-primary-blueTwo font-bold">giáo viên dạy giỏi</span> do tổng cục
                                đường bộ tổ chức thi hàng năm
                            </h1>
                            <hr className="border-t-[1px] border-primary-blueOne" />
                            <div className="mt-4 flex flex-col gap-2">
                                <p>
                                    <span className="font-bold text-primary-blueOne">Độ tuổi: </span>Đội ngũ giáo viên
                                    trẻ, nhiệt huyết, yêu nghề.
                                </p>
                                <p>
                                    <span className="font-bold text-primary-blueOne">Trình độ văn hóa: </span>Đa phần
                                    giáo viên đạt trình độ văn hóa Cao đẳng trở lên.
                                </p>
                                <p>
                                    <span className="font-bold text-primary-blueOne">Kinh nghiệm nghề nghiệp: </span>Tối
                                    thiểu 3 năm trong công tác dạy thực hành lái xe.
                                </p>
                                <p>
                                    <span className="font-bold text-primary-blueOne">Nghiệp vụ sư phạm: </span>100% có
                                    chứng chỉ sư phạm dạy nghề đã qua đào tạo.
                                </p>
                                <p>
                                    <span className="font-bold text-primary-blueOne">Tâm huyết nghề nghiệp: </span>100%
                                    yêu thích, tâm huyết với nghề.
                                </p>
                                <p>
                                    <span className="font-bold text-primary-blueOne">Kỹ năng giao tiếp: </span>100% có
                                    kỹ năng giao tiếp và truyền đạt tốt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThongTinGiangVien;

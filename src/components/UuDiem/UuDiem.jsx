import { assets } from '@/assets/assets';

function UuDiem() {
    return (
        <div className="w-full bg-primary-blueOne py-16">
            <div className="w-[90%] lg:w-[80%] mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6 text-center">
                    <hr className="hidden lg:block w-[40%] lg:w-[24%] border-white" />
                    <h1 className="text-2xl font-bold text-white uppercase">
                        Đào tạo lái xe ô tô Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4 có những ưu
                        điểm gì
                    </h1>
                    <hr className="hidden lg:block w-[40%] lg:w-[24%] border-white" />
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col gap-6">
                            <div>
                                <h1 className="text-white text-lg font-bold uppercase mb-4">
                                    Đưa chương trình thi vào đào tạo
                                </h1>
                                <p className="text-white text-justify">
                                    Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4 là đơn vị đầu tiên có
                                    phương pháp giảng dạy trực quan thông qua nội dung từng bài thi. Học viên được học
                                    tập và thực hành trên xe tập lái giống xe thi.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-white text-lg font-bold uppercase mb-2">Đội ngũ hỗ trợ</h1>
                                <p className="text-white text-justify">
                                    Có đội ngũ hỗ trợ học viên trực tiếp và liên tục tại VP đào tạo từ thứ 2 đến thứ 7
                                    hàng tuần.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-white text-lg font-bold uppercase mb-2">Không chỉ là học để thi</h1>
                                <p className="text-white text-justify">
                                    Học viên sau khi hoàn thành khóa học không chỉ nắm vững kiến thức để thi mà còn vận
                                    dụng vào thực tế để tham gia giao thông an toàn.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <img src={assets.gioiThieu} alt="Ưu điểm" className="rounded-xl w-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UuDiem;

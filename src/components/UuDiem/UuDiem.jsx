import { assets } from '@/assets/assets';

function UuDiem() {
    return (
        <div className="w-full bg-primary-blueOne py-16">
            <div className="w-[90%] lg:w-[80%] mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6 text-center">
                    <hr className="hidden lg:block w-[40%] lg:w-[24%] border-white" />
                    <h1 className="text-2xl font-bold text-white uppercase">
                        Đào tạo lái xe ô tô Lod có những ưu điểm gì
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
                                    LOD là trung tâm đầu tiên có phương pháp giảng dạy trực quan thông qua nội dung tưng
                                    bài thi. Học viên học trên xe tập lái như học trên xe thi –{' '}
                                    <span className="font-semibold">Là đơn vị có tỷ lệ đỗ cao nhất tại Hà Nội.</span>
                                </p>
                            </div>
                            <div>
                                <h1 className="text-white text-lg font-bold uppercase mb-2">Đội ngũ hỗ trợ</h1>
                                <p className="text-white text-justify">
                                    Tự hào là đơn vị <span className="font-semibold uppercase">duy nhất</span> tại Hà
                                    Nội có đội ngũ hỗ trợ học viên trực tiếp và liên tục tại văn phòng đào tạo từ thứ 2
                                    đến thứ 7 hàng tuần.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-white text-lg font-bold uppercase mb-2">Không chỉ là học để thi</h1>
                                <p className="text-white text-justify">
                                    LOD là trung tâm đầu tiên có phương pháp giảng dạy trực quan thông qua nội dung tưng
                                    bài thi. Học viên học trên xe tập lái như học trên xe thi –{' '}
                                    <span className="font-semibold">Là đơn vị có tỷ lệ đỗ cao nhất tại Hà Nội.</span>
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

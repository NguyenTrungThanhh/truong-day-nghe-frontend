import { assets } from '@/assets/assets';

function TaiSao() {
    return (
        <div className="w-full py-16">
            <div className="w-[80%] mx-auto">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <hr className="w-[21%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase">
                        Tại sao bạn nên học lái xe ô tô tại trung tâm LOD
                    </h1>
                    <hr className="w-[21%] border-t-[1px] border-primary-blueOne" />
                </div>
                <div className="grid grid-cols-3 justify-center items-center gap-12">
                    <div className="flex flex-col justify-center items-center">
                        <div className="mb-2">
                            <img src={assets.logo} alt="" className="w-16" />
                        </div>
                        <div>
                            <h1 className="text-primary-blueOne font-bold text-xl text-center mb-2">
                                10 Năm Đào tạo chuyên nghiệp
                            </h1>
                            <p className="text-center">
                                Sau 10 năm thành lập, Thành công lớn nhất của LOD được tạo bởi chính việc lái xe an
                                toàn, am hiểu luật GTĐB của hơn 100.000 học viên sau khi kết thúc khoá học.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="mb-2">
                            <img src={assets.logo} alt="" className="w-16" />
                        </div>
                        <div>
                            <h1 className="text-primary-blueOne font-bold text-xl text-center mb-2">
                                Đội ngũ giáo viên giỏi – Tâm huyết
                            </h1>
                            <p className="text-center">
                                LOD sở hữu đội ngũ giáo viên trình đội cao, nhiệt huyết, tận tâm, giàu kinh nghiệm. 100%
                                Giáo viên đạt tiêu chuẩn giáo viên dạy giỏi do Tổng Cục Đường Bộ tổ chức thi hàng năm.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="mb-2">
                            <img src={assets.logo} alt="" className="w-16" />
                        </div>
                        <div>
                            <h1 className="text-primary-blueOne font-bold text-xl text-center mb-2">
                                Xe tập lái mới – Có Sân tập riêng
                            </h1>
                            <p className="text-center">
                                LOD sở hữu 45000m2 sân đạt tiêu chuẩn ISO 9001:2015. Học viên được học trực tiến trên
                                sân thi – xe thi. 100% xe tập lái tại LOD xe đời mới được bảo dưỡng định kỳ theo tiêu
                                chuẩn an toàn.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="mb-2">
                            <img src={assets.logo} alt="" className="w-16" />
                        </div>
                        <div>
                            <h1 className="text-primary-blueOne font-bold text-xl text-center mb-2">
                                Phương pháp học dễ hiểu
                            </h1>
                            <p className="text-center">
                                Phương pháp giảng dạy lấy học viên làm trung tâm, đưa nội dung thi vào chương trình học.
                                đảm bảo tỷ lệ đỗ cao nhất HN
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="mb-2">
                            <img src={assets.logo} alt="" className="w-16" />
                        </div>
                        <div>
                            <h1 className="text-primary-blueOne font-bold text-xl text-center mb-2">
                                Phù hợp với người mới
                            </h1>
                            <p className="text-center">
                                Bạn không cần giỏi về xe cộ. Yêu cầu duy nhất đó là dành được tối thiểu 1 buổi/tuần để
                                học lái. Chúng tôi sẽ đào tạo bạn đến khi có bằng.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="mb-2">
                            <img src={assets.logo} alt="" className="w-16" />
                        </div>
                        <div>
                            <h1 className="text-primary-blueOne font-bold text-xl text-center mb-2">Chi phí hợp lý</h1>
                            <p className="text-center">
                                LOD cam kết hoàn trả 100% học phí nếu bạn không hài lòng với chất lượng đào tạo – Học
                                phí luôn rẻ nhất nhưng chất lượng tốt nhất HN
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaiSao;

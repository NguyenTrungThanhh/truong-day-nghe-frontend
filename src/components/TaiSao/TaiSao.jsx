import { assets } from '@/assets/assets';

function TaiSao() {
    return (
        <div className="w-full py-16">
            <div className="w-[90%] lg:w-[80%] mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8 text-center">
                    <hr className="hidden lg:block w-[21%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase">
                        Tại sao bạn nên học lái xe ô tô tại trung tâm LOD
                    </h1>
                    <hr className="hidden lg:block w-[21%] border-t-[1px] border-primary-blueOne" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: '10 Năm Đào tạo chuyên nghiệp',
                            desc: 'Sau 10 năm thành lập, Thành công lớn nhất của LOD được tạo bởi chính việc lái xe an toàn, am hiểu luật GTĐB của hơn 100.000 học viên sau khi kết thúc khoá học.',
                        },
                        {
                            title: 'Đội ngũ giáo viên giỏi – Tâm huyết',
                            desc: 'LOD sở hữu đội ngũ giáo viên trình đội cao, nhiệt huyết, tận tâm, giàu kinh nghiệm. 100% Giáo viên đạt tiêu chuẩn giáo viên dạy giỏi do Tổng Cục Đường Bộ tổ chức thi hàng năm.',
                        },
                        {
                            title: 'Xe tập lái mới – Có Sân tập riêng',
                            desc: 'LOD sở hữu 45000m2 sân đạt tiêu chuẩn ISO 9001:2015. Học viên được học trực tiếp trên sân thi – xe thi. 100% xe tập lái tại LOD xe đời mới được bảo dưỡng định kỳ theo tiêu chuẩn an toàn.',
                        },
                        {
                            title: 'Phương pháp học dễ hiểu',
                            desc: 'Phương pháp giảng dạy lấy học viên làm trung tâm, đưa nội dung thi vào chương trình học. đảm bảo tỷ lệ đỗ cao nhất HN',
                        },
                        {
                            title: 'Phù hợp với người mới',
                            desc: 'Bạn không cần giỏi về xe cộ. Yêu cầu duy nhất đó là dành được tối thiểu 1 buổi/tuần để học lái. Chúng tôi sẽ đào tạo bạn đến khi có bằng.',
                        },
                        {
                            title: 'Chi phí hợp lý',
                            desc: 'LOD cam kết hoàn trả 100% học phí nếu bạn không hài lòng với chất lượng đào tạo – Học phí luôn rẻ nhất nhưng chất lượng tốt nhất HN',
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center text-center">
                            <img src={assets.logo} alt="" className="w-16 mb-2" />
                            <h1 className="text-primary-blueOne font-bold text-xl mb-2">{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TaiSao;

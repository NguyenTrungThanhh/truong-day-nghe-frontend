import { assets } from '@/assets/assets';

function TaiSao() {
    return (
        <div className="w-full py-16">
            <div className="w-[90%] lg:w-[80%] mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8 text-center">
                    <hr className="hidden lg:block w-[19%] border-t-[1px] border-primary-blueOne" />
                    <h1 className="text-2xl font-bold text-primary-blueOne uppercase">
                        Tại sao bạn nên học lái xe ô tô tại Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4
                    </h1>
                    <hr className="hidden lg:block w-[19%] border-t-[1px] border-primary-blueOne" />
                </div>

                <div className="space-y-8">
                    {/* Hàng 1: 3 cột trên desktop, 1 cột trên mobile & tablet */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: '10 năm đào tạo chuyên nghiệp',
                                desc: 'Trung tâm đã đào tạo hàng chục nghìn học viên lái xe an toàn, am hiểu luật giao thông. Đó là thành quả của hơn 10 năm phát triển bền vững.',
                            },
                            {
                                title: 'Đội ngũ giáo viên giỏi – Tận tâm',
                                desc: 'Giáo viên tại trung tâm đạt chuẩn nghiệp vụ sư phạm, giàu kinh nghiệm và luôn tận tình hướng dẫn học viên trong suốt quá trình học.',
                            },
                            {
                                title: 'Xe tập lái mới – Có sân tập riêng',
                                desc: 'Sân tập đạt chuẩn và hệ thống xe tập lái đời mới, được bảo dưỡng định kỳ, mang đến trải nghiệm học tập an toàn và hiệu quả.',
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center text-center max-w-sm mx-auto"
                            >
                                <img src={assets.logo} alt="" className="w-16 mb-2" />
                                <h1 className="text-primary-blueOne font-bold text-xl mb-2">{item.title}</h1>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Hàng 2: 2 cột trên desktop, 1 cột trên mobile & tablet */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center lg:w-2/3 mx-auto">
                        {[
                            {
                                title: 'Phương pháp học dễ hiểu',
                                desc: 'Áp dụng phương pháp lấy học viên làm trung tâm, kết hợp lý thuyết – thực hành – mô phỏng, giúp dễ tiếp thu và ghi nhớ lâu.',
                            },
                            {
                                title: 'Chi phí hợp lý, minh bạch',
                                desc: 'Cam kết mức học phí cạnh tranh, công khai và minh bạch. Chất lượng luôn là yếu tố được đặt lên hàng đầu.',
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center text-center max-w-sm mx-auto"
                            >
                                <img src={assets.logo} alt="" className="w-16 mb-2" />
                                <h1 className="text-primary-blueOne font-bold text-xl mb-2">{item.title}</h1>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaiSao;

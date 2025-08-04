import { assets } from '@/assets/assets';

function GioiThieu() {
    return (
        <div className="w-full py-16">
            <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-8">
                {/* Cột trái */}
                <div className="w-full lg:w-[35%]">
                    <div className="uppercase text-2xl font-bold leading-tight">
                        <span className="text-[48px] sm:text-[60px] text-green-700">10 năm </span>
                        <span className="text-primary-blueOne">đào tạo</span>
                        <p className="text-[22px] sm:text-[28px] text-primary-blueOne mt-2">
                            LÁI XE Ô TÔ – HỌC LÁI XE Ô TÔ HẠNG B2
                        </p>
                    </div>
                    <p className="mt-4 leading-relaxed text-[#2e2e2e] text-justify">
                        Sau 10 năm thành lập, thành công lớn nhất của{' '}
                        <span className="text-primary-blueOne font-bold">LOD</span> được tạo bởi chính việc đào tạo bằng
                        lái xe tốt nhất, am hiểu luật GTĐB của hơn 100.000 học viên sau khi kết thúc khoá học. Tận tâm
                        chăm sóc học viên mang lại những lợi ích tốt nhất cho học viên là những gì LOD luôn theo đuổi.
                    </p>
                </div>

                {/* Cột phải */}
                <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center border border-primary-blueOne p-4 bg-white rounded-lg shadow-sm"
                        >
                            <div className="mb-2 w-20 h-20 border border-primary-blueOne rounded-full flex justify-center items-center">
                                <img src={assets.logo} className="w-12 h-12" />
                            </div>
                            <h3 className="text-primary-blueOne font-bold mb-2 text-lg text-center">SÂN TẬP RIÊNG</h3>
                            <p className="text-[#333] leading-snug text-center">
                                LOD sở hữu 45000m2 sân tập đạt tiêu chuẩn ISO 9001:2015. Học viên được học trực tiếp
                                trên sân thi – xe thi.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GioiThieu;

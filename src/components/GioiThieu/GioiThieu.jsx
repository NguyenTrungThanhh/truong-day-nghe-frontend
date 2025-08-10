import { assets } from '@/assets/assets';

const data = [
    {
        name: 'Sân tập riêng',
        desc: 'Trung tâm sở hữu 26.000m² sân tập đạt chuẩn của Sở GTVT, cho phép học viên tập và thi ngay trên sân đạt tiêu chuẩn.',
    },
    {
        name: 'Đội xe đời mới',
        desc: 'Xe tập lái luôn được bảo dưỡng định kỳ, trang bị công nghệ an toàn, giúp học viên yên tâm khi học và thi.',
    },
    {
        name: 'Giáo viên tận tâm',
        desc: 'Đội ngũ giáo viên nhiều năm kinh nghiệm, phương pháp giảng dạy dễ hiểu, luôn đồng hành cùng học viên.',
    },
    {
        name: 'Lịch học linh hoạt',
        desc: 'Học viên có thể lựa chọn khung giờ học phù hợp, kể cả buổi tối và cuối tuần để đảm bảo thuận tiện nhất.',
    },
];

function GioiThieu() {
    return (
        <div className="w-full py-16">
            <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-8">
                {/* Cột trái */}
                <div className="w-full lg:w-[35%]">
                    <div className="uppercase text-2xl font-bold leading-tight">
                        <span className="text-primary-blueOne">ĐÀO TẠO</span>
                        <p className="text-[22px] sm:text-[28px] text-primary-blueOne mt-2">
                            LÁI XE Ô TÔ – HỌC LÁI XE Ô TÔ
                        </p>
                    </div>
                    <p className="mt-4 leading-relaxed text-[#2e2e2e] text-justify">
                        Thành công lớn nhất của{' '}
                        <span className="text-primary-blueOne font-bold">
                            Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4
                        </span>{' '}
                        được tạo bởi chính việc đào tạo bằng lái xe tốt nhất, am hiểu luật GTĐB của hơn 100.000 học viên
                        sau khi kết thúc khoá học. Tận tâm chăm sóc học viên, mang lại những lợi ích tốt nhất cho học
                        viên là những gì chúng tôi luôn theo đuổi.
                    </p>
                </div>

                {/* Cột phải */}
                <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center border border-primary-blueOne p-4 bg-white rounded-lg shadow-sm"
                        >
                            <div className="mb-2 w-20 h-20 border border-primary-blueOne rounded-full flex justify-center items-center">
                                <img src={assets.logo} className="w-12 h-12" />
                            </div>
                            <h3 className="text-primary-blueOne font-bold mb-2 text-lg text-center uppercase">
                                {item.name}
                            </h3>
                            <p className="text-[#333] leading-snug text-center">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GioiThieu;

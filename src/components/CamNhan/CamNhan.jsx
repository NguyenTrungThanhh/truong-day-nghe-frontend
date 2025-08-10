import { assets } from '@/assets/assets';

const data = [
    {
        name: 'Trần Thị Bích',
        desc: 'Em vừa thi xong và đậu ngay lần đầu tiên! Thầy cô ở Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4 hướng dẫn tận tình, dễ hiểu, luôn tạo động lực để học viên tự tin khi lái xe.',
        address: 'Bỉm Sơn - Thanh Hóa',
        image: assets.khoaHocB2,
    },
    {
        name: 'Phạm Văn Hùng',
        desc: 'Học ở Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4 đúng là một trải nghiệm tuyệt vời. Kiến thức lý thuyết được truyền đạt rõ ràng, phần thực hành rất sát với bài thi, giúp em thi mà không bị bỡ ngỡ.',
        address: 'Hà Trung - Thanh Hóa',
        image: assets.gioiThieu,
    },
    {
        name: 'Ngô Minh Quân',
        desc: 'Thầy cô vui tính, hỗ trợ học viên từng chút một. Em cảm thấy tự tin hơn rất nhiều khi cầm vô-lăng. Cảm ơn Trung tâm Đào tạo Lái xe - Công ty Cổ phần Vận tải Ô tô số 4 đã giúp em đạt kết quả tốt.',
        address: 'Nga Sơn - Thanh Hóa',
        image: assets.sanTruong4,
    },
];

function CamNhan() {
    return (
        <div className="w-full bg-primary-blueOne py-16">
            <div className="w-[90%] lg:w-[80%] mx-auto">
                {/* Title */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6 text-center">
                    <hr className="hidden lg:block w-[35%] border-white" />
                    <h1 className="text-2xl font-bold text-white uppercase">Cảm nhận của học viên</h1>
                    <hr className="hidden lg:block w-[35%] border-white" />
                </div>

                {/* Grid testimonials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col h-full">
                            {/* Image */}
                            <div>
                                <img src={item.image} alt="" className="w-full h-52 object-cover rounded-t-lg" />
                            </div>

                            {/* Content */}
                            <div className="p-3 bg-white rounded-b-lg flex flex-col flex-1">
                                <p className="text-justify text-sm sm:text-base flex-1">{item.desc}</p>
                                <div className="mt-4 flex gap-4 items-center">
                                    <div>
                                        <h1 className="text-primary-blueOne font-bold uppercase text-sm sm:text-base">
                                            {item.name}
                                        </h1>
                                        <p className="text-primary-blueOne text-sm">{item.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CamNhan;

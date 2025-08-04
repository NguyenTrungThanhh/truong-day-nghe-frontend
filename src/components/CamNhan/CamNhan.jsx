import { assets } from '@/assets/assets';

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
                    {[1, 2, 3].map((_, index) => (
                        <div key={index}>
                            {/* Image */}
                            <div>
                                <img src={assets.gioiThieu} alt="" className="w-full h-52 object-cover rounded-t-lg" />
                            </div>

                            {/* Content */}
                            <div className="p-3 bg-white rounded-b-lg">
                                <p className="text-justify text-sm sm:text-base">
                                    Hôm nay em nhận được bằng rồi ạ! Thầy dạy rất chuyên nghiệp, giảng dạy rất truyền
                                    cảm mọi kiến thức đều rất là thực tế khi thực hành. Em cảm ơn thầy và trung tâm đào
                                    tạo lái xe LOD rất nhiều.
                                </p>
                                <div className="mt-4 flex gap-4 items-center">
                                    <img
                                        src={assets.khoaHocB2}
                                        alt=""
                                        className="w-[70px] h-16 object-cover rounded-md"
                                    />
                                    <div>
                                        <h1 className="text-primary-blueOne font-bold uppercase text-sm sm:text-base">
                                            Nguyễn Quang Minh
                                        </h1>
                                        <p className="text-primary-blueOne text-sm">Ba Đình - Hà Nội</p>
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

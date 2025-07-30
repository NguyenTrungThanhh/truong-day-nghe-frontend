import { assets } from '@/assets/assets';

function CamNhan() {
    return (
        <div className="w-full bg-primary-blueOne py-16">
            <div className="w-[80%] mx-auto">
                <div className="flex justify-center items-center gap-4 mb-6">
                    <hr className="w-[35%]" />
                    <h1 className="text-2xl font-bold text-white uppercase">Cảm nhận của học viên</h1>
                    <hr className="w-[35%]" />
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <div>
                            <img src={assets.gioiThieu} alt="" className="w-full h-52 object-cover rounded-t-lg" />
                        </div>
                        <div className="p-3 bg-white rounded-b-lg">
                            <p className="text-justify">
                                Hôm nay em nhận được bằng rồi ạ! Thầy dạy rất chuyên nghiệp, giảng dạy rất truyền cảm
                                mọi kiến thức đều rất là thực tế khi thực hành, Em cảm ơn thầy và trung tâm đào tạo lái
                                xe LOD rất nhiều.
                            </p>
                            <div className="mt-4 flex gap-4">
                                <img src={assets.khoaHocB2} alt="" className="w-[70px] h-16" />
                                <div>
                                    <h1 className="text-primary-blueOne font-bold uppercase">Nguyễn Quang Minh</h1>
                                    <p className="text-primary-blueOne">Ba Đình - Hà Nội</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={assets.gioiThieu} alt="" className="w-full h-52 object-cover rounded-t-lg" />
                        </div>
                        <div className="p-3 bg-white rounded-b-lg">
                            <p className="text-justify">
                                Hôm nay em nhận được bằng rồi ạ! Thầy dạy rất chuyên nghiệp, giảng dạy rất truyền cảm
                                mọi kiến thức đều rất là thực tế khi thực hành, Em cảm ơn thầy và trung tâm đào tạo lái
                                xe LOD rất nhiều.
                            </p>
                            <div className="mt-4 flex gap-4">
                                <img src={assets.khoaHocB2} alt="" className="w-[70px] h-16" />
                                <div>
                                    <h1 className="text-primary-blueOne font-bold uppercase">Nguyễn Quang Minh</h1>
                                    <p className="text-primary-blueOne">Ba Đình - Hà Nội</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={assets.gioiThieu} alt="" className="w-full h-52 object-cover rounded-t-lg" />
                        </div>
                        <div className="p-3 bg-white rounded-b-lg">
                            <p className="text-justify">
                                Hôm nay em nhận được bằng rồi ạ! Thầy dạy rất chuyên nghiệp, giảng dạy rất truyền cảm
                                mọi kiến thức đều rất là thực tế khi thực hành, Em cảm ơn thầy và trung tâm đào tạo lái
                                xe LOD rất nhiều.
                            </p>
                            <div className="mt-4 flex gap-4">
                                <img src={assets.khoaHocB2} alt="" className="w-[70px] h-16" />
                                <div>
                                    <h1 className="text-primary-blueOne font-bold uppercase">Nguyễn Quang Minh</h1>
                                    <p className="text-primary-blueOne">Ba Đình - Hà Nội</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CamNhan;

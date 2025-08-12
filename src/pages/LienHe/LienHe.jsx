import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faClock, faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { useEffect, useState } from 'react';

function LienHe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        document.title = 'Liên hệ';
    });

    return (
        <div>
            <div className="w-full bg-[#f4f4f4] py-4">
                <div className="w-[80%] mx-auto">
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <Link to={config.routes.home}>
                            <h1>Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" className="mt-1" />
                        <h1 className="text-primary-blueOne">Liên hệ</h1>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto my-8">
                <div className="flex gap-8">
                    <div className="w-1/2 flex flex-col gap-3">
                        <h1 className="text-primary-blueOne font-bold uppercase">
                            Nơi giải đáp toàn bộ thắc mắc của bạn?
                        </h1>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-1 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 border border-primary-blueOne rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-primary-blueOne" />
                                </div>
                                <div className="text-sm flex-1">
                                    <h1 className="font-bold">Địa chỉ</h1>
                                    <p>Tổ dân phố 14, đường Trần Hưng Đạo, Phường Bỉm Sơn, Tỉnh Thanh Hoá</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 border border-primary-blueOne rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faClock} className="text-primary-blueOne" />
                                </div>
                                <div className="text-sm flex-1">
                                    <h1 className="font-bold">Thời gian làm việc</h1>
                                    <p>8h - 22h từ thứ 2 đến chủ nhật </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 border border-primary-blueOne rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faPhoneVolume} className="text-primary-blueOne" />
                                </div>
                                <div className="text-sm flex-1">
                                    <h1 className="font-bold">Hotline</h1>
                                    <a href="tel:02373824988" className="hover:text-primary-blueOne duration-300">
                                        0237 3824 988
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 border border-primary-blueOne rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-primary-blueOne" />
                                </div>
                                <div className="text-sm flex-1">
                                    <h1 className="font-bold">Email</h1>
                                    <a
                                        href="mailto:truonglaioto4@gmail.com"
                                        className="hover:text-primary-blueOne duration-300"
                                    >
                                        truonglaioto4@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold uppercase">Liên hệ với chúng tôi</h1>
                            <p className="text-sm">
                                Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại
                                với bạn sớm nhất có thể.
                            </p>
                            <form action="" className="flex flex-col gap-3">
                                <input
                                    value={name}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Họ và tên"
                                    className="w-full px-5 py-1 border border-[#e6e6e6] rounded-lg focus:outline-none focus:border-primary-blueOne transition-colors duration-300"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    value={email}
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full px-5 py-1 border border-[#e6e6e6] rounded-lg focus:outline-none focus:border-primary-blueOne transition-colors duration-300"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    value={phone}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Số điện thoại"
                                    className="w-full px-5 py-1 border border-[#e6e6e6] rounded-lg focus:outline-none focus:border-primary-blueOne transition-colors duration-300"
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <textarea
                                    value={content}
                                    name="content"
                                    id="content"
                                    placeholder="Nội dung"
                                    className="w-full px-5 py-2 border border-[#e6e6e6] rounded-lg focus:outline-none focus:border-primary-blueOne transition-colors duration-300"
                                    onChange={(e) => setContent(e.target.value)}
                                ></textarea>
                                <button
                                    type="submit"
                                    className="text-start w-[122px] h-[35px] flex items-center justify-center bg-primary-blueOne rounded-full text-sm text-white hover:bg-primary-blueTwo duration-300"
                                >
                                    Gửi thông tin
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="w-[640px] h-[608px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14988.509653886294!2d105.88221100000001!3d20.08696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31366768de08f22b%3A0x7beebcd7f2274fbc!2zVHJ1bmcgdMOibSDEkcOgbyB04bqhbyBsw6FpIHhlIELhu4ltIFPGoW4gVGhhbmggSMOzYQ!5e0!3m2!1svi!2sus!4v1754925379448!5m2!1svi!2sus"
                                className="w-full h-full rounded-xl"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LienHe;

import { assets } from '@/assets/assets';
import config from '@/configs';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const hideTimer = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Khi cuộn xuống qua 300px -> bật sticky
            if (window.scrollY > 300) {
                setIsSticky(true);
            }

            // Khi cuộn về đầu trang (y = 0) thì tắt sticky
            if (window.scrollY === 0) {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const show = () => {
        clearTimeout(hideTimer.current);
        setIsDropdownOpen(true);
    };

    const hide = () => {
        hideTimer.current = setTimeout(() => setIsDropdownOpen(false), 200);
    };

    return (
        <>
            {/* Chống giật layout khi header chuyển sang fixed */}
            {isSticky && <div className="h-[100px]"></div>}

            <div
                className={`w-full bg-white z-50 transition-all duration-300 shadow ${
                    isSticky ? 'fixed top-0 left-0 animate-slideDown' : 'relative'
                }`}
            >
                <div className="w-[80%] mx-auto flex items-center justify-between py-2">
                    {/* Logo */}
                    <Link to={config.routes.home}>
                        <img src={assets.logo} alt="Logo" className="w-20 object-contain" />
                    </Link>

                    {/* Menu chính */}
                    <div className="flex items-center gap-8">
                        <Link to={config.routes.home}>
                            <h1
                                className={`font-semibold uppercase hover:text-primary-blueOne duration-300 ${
                                    location.pathname === config.routes.home ? 'text-primary-blueOne' : ''
                                }`}
                            >
                                Trang chủ
                            </h1>
                        </Link>

                        <Link to={config.routes.GioiThieu}>
                            <h1
                                className={`font-semibold uppercase hover:text-primary-blueOne duration-300 ${
                                    location.pathname === config.routes.GioiThieu ? 'text-primary-blueOne' : ''
                                }`}
                            >
                                Giới thiệu
                            </h1>
                        </Link>

                        {/* Dropdown menu */}
                        <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
                            <div className="flex items-center gap-2 hover:text-primary-blueOne duration-300 cursor-pointer">
                                <h1
                                    className={`font-semibold uppercase hover:text-primary-blueOne duration-300 ${
                                        location.pathname === config.routes.HocLaiXeOToHangB1 ||
                                        location.pathname === config.routes.HocLaiXeOToHangB2 ||
                                        location.pathname === config.routes.HocLaiXeOToHangC ||
                                        location.pathname === config.routes.KhoaNangHangDLenE
                                            ? 'text-primary-blueOne'
                                            : ''
                                    }`}
                                >
                                    Khóa học lái xe
                                </h1>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    size="sm"
                                    className={`transition-transform duration-300 ${
                                        isDropdownOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </div>

                            {isDropdownOpen && (
                                <div className="absolute left-0 top-full bg-white px-3 py-2 mt-2 shadow-lg border rounded-md w-64 z-20 transition duration-300">
                                    <Link
                                        to={config.routes.HocLaiXeOToHangB1}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-blueOne duration-300"
                                    >
                                        Học lái xe ô tô hạng B1
                                    </Link>
                                    <Link
                                        to={config.routes.HocLaiXeOToHangB2}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-blueOne duration-300"
                                    >
                                        Học lái xe ô tô hạng B2
                                    </Link>
                                    <Link
                                        to={config.routes.HocLaiXeOToHangC}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-blueOne duration-300"
                                    >
                                        Học lái xe tải hạng C
                                    </Link>
                                    <Link
                                        to={config.routes.KhoaNangHangDLenE}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-blueOne duration-300"
                                    >
                                        Nâng hạng D lên E
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link to={config.routes.home}>
                            <h1
                                className={`font-semibold uppercase hover:text-primary-blueOne duration-300 ${
                                    location.pathname === config.routes.Ban ? 'text-primary-blueOne' : ''
                                }`}
                            >
                                Bảng giá học phí
                            </h1>
                        </Link>

                        <Link to={config.routes.TinTuc}>
                            <h1
                                className={`font-semibold uppercase hover:text-primary-blueOne duration-300 ${
                                    location.pathname === config.routes.TinTuc ? 'text-primary-blueOne' : ''
                                }`}
                            >
                                Tin tức
                            </h1>
                        </Link>

                        <Link to={config.routes.LienHe}>
                            <h1
                                className={`font-semibold uppercase hover:text-primary-blueOne duration-300 ${
                                    location.pathname === config.routes.LienHe ? 'text-primary-blueOne' : ''
                                }`}
                            >
                                Liên hệ
                            </h1>
                        </Link>
                    </div>

                    {/* Nút đăng ký */}
                    <div className="bg-primary-blueOne px-4 py-2 rounded-full hover:bg-primary-blueTwo duration-300">
                        <button className="font-semibold uppercase text-white">Đăng ký ngay</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;

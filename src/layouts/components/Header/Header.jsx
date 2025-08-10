import { assets } from '@/assets/assets';
import config from '@/configs';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
    { label: 'Trang chủ', path: config.routes.home },
    { label: 'Giới thiệu', path: config.routes.GioiThieu },
    {
        label: 'Khóa học lái xe',
        submenu: [
            { label: 'Khoá học lái xe mô tô hạng A1', path: config.routes.KhoaHocLaiXeMoToHangA1 },
            { label: 'Khóa học lái xe ô tô hạng B ( số tự động )', path: config.routes.KhoaHocLaiXeOToHangBSoTuDong },
            { label: 'Khóa học lái xe ô tô hạng B ( số cơ khí )', path: config.routes.KhoaHocLaiXeOToHangBSoCoKhi },
            { label: 'Khóa học lái xe ô tô hạng C1', path: config.routes.KhoaHocLaiXeOToHangC1 },
            { label: 'Khóa học lái xe ô tô nâng hạng C', path: config.routes.KhoaHocLaiXeOToNangHangC },
        ],
    },
    { label: 'Bảng giá học phí', path: config.routes.BangGiaHocPhi },
    { label: 'Tin tức', path: config.routes.TinTuc },
    { label: 'Liên hệ', path: config.routes.LienHe },
];

function Header() {
    const hideTimer = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) setIsSticky(true);
            if (window.scrollY === 0) setIsSticky(false);
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
            {isSticky && <div className="h-[100px]"></div>}

            <div
                className={`w-full bg-white z-50 transition-all duration-300 shadow ${
                    isSticky ? 'fixed top-0 left-0 animate-slideDown' : 'relative'
                }`}
            >
                {/* Mobile Header */}
                <div className="w-[90%] mx-auto flex items-center justify-between py-6 relative lg:hidden">
                    <button onClick={() => setShowMobileMenu(true)} className="text-xl">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <Link to={config.routes.home} className="absolute left-1/2 transform -translate-x-1/2">
                        <img src={assets.logo} alt="Logo" className="w-20 object-contain" />
                    </Link>
                    <button
                        className="bg-primary-blueOne px-3 py-2 rounded-full text-white text-sm font-medium shadow"
                        onClick={() => setShowModal(true)}
                    >
                        Đăng ký
                    </button>
                </div>

                {/* Desktop Header */}
                <div className="w-[80%] mx-auto hidden lg:flex items-center justify-between py-2">
                    <Link to={config.routes.home}>
                        <img src={assets.logo} alt="Logo" className="w-20 object-contain" />
                    </Link>

                    <div className="flex items-center gap-8">
                        {menuItems.map((item, index) => {
                            if (!item.submenu) {
                                return (
                                    <Link to={item.path} key={index}>
                                        <h1
                                            className={`font-semibold uppercase hover:text-primary-blueOne duration-300 ${
                                                location.pathname === item.path ? 'text-primary-blueOne' : ''
                                            }`}
                                        >
                                            {item.label}
                                        </h1>
                                    </Link>
                                );
                            }

                            return (
                                <div className="relative" key={index} onMouseEnter={show} onMouseLeave={hide}>
                                    <div className="flex items-center gap-2 hover:text-primary-blueOne duration-300 cursor-pointer">
                                        <h1
                                            className={`font-semibold uppercase hover:text-primary-blueOne duration-300 ${
                                                item.submenu.some((sub) => sub.path === location.pathname)
                                                    ? 'text-primary-blueOne'
                                                    : ''
                                            }`}
                                        >
                                            {item.label}
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
                                        <div className="absolute left-0 top-full bg-white px-3 py-2 mt-2 shadow-lg border rounded-md w-96 z-20 transition duration-300">
                                            {item.submenu.map((sub, subIndex) => (
                                                <Link
                                                    to={sub.path}
                                                    key={subIndex}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-blueOne duration-300"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="bg-primary-blueOne px-4 py-2 rounded-full hover:bg-primary-blueTwo duration-300">
                        <button className="font-semibold uppercase text-white" onClick={() => setShowModal(true)}>
                            Đăng ký ngay
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                <div
                    className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white z-50 shadow transform transition-transform duration-300 ${
                        showMobileMenu ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="flex justify-between items-center px-4 py-4 border-b shadow-sm bg-primary-blueOne text-white">
                        <span className="font-semibold text-lg">Menu</span>
                        <button onClick={() => setShowMobileMenu(false)} className="text-xl">
                            ✕
                        </button>
                    </div>
                    <nav className="flex flex-col gap-1 px-4 py-4 text-gray-800">
                        {menuItems.map((item, index) =>
                            item.submenu ? (
                                <div key={index}>
                                    <button
                                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                        className="flex items-center justify-between py-2 px-2 font-medium hover:bg-gray-100 rounded w-full"
                                    >
                                        <span>{item.label}</span>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            className={`${mobileDropdownOpen ? 'rotate-180' : ''} transition-transform`}
                                        />
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                            mobileDropdownOpen
                                                ? 'max-h-64 opacity-100 translate-y-0'
                                                : 'max-h-0 opacity-0 -translate-y-2'
                                        } ml-3 pl-3 border-l-2 border-primary-blueOne flex flex-col text-sm text-gray-600 gap-1`}
                                    >
                                        {item.submenu.map((sub, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                to={sub.path}
                                                onClick={() => setShowMobileMenu(false)}
                                                className="py-1 px-2 rounded hover:bg-gray-100 transition duration-200"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    className="py-2 px-2 rounded hover:bg-gray-100 font-medium"
                                    to={item.path}
                                    onClick={() => setShowMobileMenu(false)}
                                >
                                    {item.label}
                                </Link>
                            ),
                        )}
                    </nav>
                </div>

                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[60]">
                        <div className="bg-white p-6 rounded-lg w-[90%] max-w-sm shadow-lg">
                            <h2 className="text-lg font-bold mb-4 text-center">Bạn muốn làm gì?</h2>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61558417543410"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary-blueOne text-white py-2 px-4 rounded text-center hover:opacity-90"
                                >
                                    Đăng ký qua Fanpage
                                </a>
                                <a
                                    href="tel:02373824988"
                                    className="bg-primary-blueOne text-white py-2 px-4 rounded text-center hover:opacity-90"
                                >
                                    Gọi trực tiếp 0237 3824 988
                                </a>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="mt-2 py-2 px-4 text-white rounded bg-primary-blueTwo hover:opacity-90 text-sm"
                                >
                                    Đóng
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Header;

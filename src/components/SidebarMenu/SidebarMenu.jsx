import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import config from '@/configs';
import { TruongDayngheContext } from '@/context/TruongDayngheContext';

function SidebarMenu() {
    const { tinTucData } = useContext(TruongDayngheContext);

    const menuItems = [
        { path: config.routes.HocLaiXeOToHangB1, label: 'Học lái xe ô tô hạng B1' },
        { path: config.routes.HocLaiXeOToHangB2, label: 'Học lái xe ô tô hạng B2' },
        { path: config.routes.HocLaiXeOToHangC, label: 'Học lái xe ô tô hạng C' },
    ];

    return (
        <div className="flex flex-col gap-8">
            <div className="border rounded-md overflow-hidden shadow-md">
                <div className="flex items-center gap-4 bg-primary-blueOne px-4 py-3 text-white">
                    <h3 className="font-bold uppercase">Khóa học lái xe</h3>
                </div>
                <div className="px-4 py-2">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={`block py-1 min-h-[40px] flex items-center duration-200 hover:text-primary-blueOne ${
                                index !== menuItems.length - 1 ? 'border-b' : ''
                            }`}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>

            <div className="border rounded-md overflow-hidden shadow-md">
                <div className="flex items-center gap-4 bg-primary-blueOne px-4 py-3 text-white">
                    <h3 className="font-bold uppercase">Bài viết gần đây</h3>
                </div>
                <div>
                    {tinTucData.slice(0, 6).map((item, index, arr) => (
                        <div
                            key={index}
                            className={`flex items-center gap-3 my-2 px-2 py-1 ${
                                index !== arr.length - 1 ? 'border-b-[1px]' : ''
                            }`}
                        >
                            <div>
                                <Link to={`${config.routes[item.type]}/${item.slug}`} className="block w-11 h-11">
                                    <img src={item.image} alt="" className="w-full max-w-none h-[41px] object-cover" />
                                </Link>
                            </div>
                            <div>
                                <Link to={`${config.routes[item.type]}/${item.slug}`}>
                                    <h1 className="text-sm hover:text-primary-blueOne line-clamp-2">{item.name}</h1>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SidebarMenu;

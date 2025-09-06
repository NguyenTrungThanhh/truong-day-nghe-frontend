import { useNavigate } from 'react-router-dom';

function HeaderAdmin() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/');
    };

    return (
        <>
            {localStorage.getItem('adminToken') ? (
                <div className="w-full border-b-2 border-gray-200 px-5 sm:px-12 py-4 bg-white text-gray-800 flex justify-between items-center shadow-md">
                    <h1 className="text-2xl font-bold text-blue-500">Admin Panel</h1>
                    <button
                        className="font-bold px-3 py-2 bg-[#ff2d37] text-white rounded-lg hover:opacity-80"
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </button>
                </div>
            ) : null}
        </>
    );
}

export default HeaderAdmin;

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import apiAdmin from '@/api/apiAdmin';

function Admin() {
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = 'Admin';
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await apiAdmin.post('/adminLogin', { password });

            if (res.data.success) {
                localStorage.setItem('adminToken', res.data.token);
                toast.success('✅ Đăng nhập thành công!');

                // Điều hướng về dashboard admin
                window.location.href = '/admin';
            }
        } catch (err) {
            toast.error(err.response?.data?.message || '❌ Sai mật khẩu hoặc server lỗi');
        }
    };

    // check login bằng token
    if (localStorage.getItem('adminToken')) {
        return (
            <div className="flex items-center justify-center min-h-screen px-4">
                <h1 className="text-3xl font-bold text-center">Welcome, Admin!</h1>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs sm:max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
                <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <button
                    type="submit"
                    className="w-full bg-primary-blueOne text-white py-2 rounded-md hover:bg-primary-blueTwo transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Admin;

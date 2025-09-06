import axios from 'axios';
import { toast } from 'react-toastify';

const apiAdmin = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/v1/admin`,
});

// Request interceptor: tự gắn token
apiAdmin.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

// Response interceptor: xử lý lỗi xác thực
apiAdmin.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const { status, data } = error.response;

            if (status === 401) {
                toast.error('Bạn chưa đăng nhập hoặc token bị thiếu');
                localStorage.removeItem('adminToken');
                window.location.href = '/admin';
            } else if (status === 403) {
                toast.error(data.message || 'Không có quyền truy cập');
                localStorage.removeItem('adminToken');
                window.location.href = '/admin';
            }
        }
        return Promise.reject(error);
    },
);

export default apiAdmin;

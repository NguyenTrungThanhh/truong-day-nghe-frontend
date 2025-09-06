import { Navigate } from 'react-router-dom';

function PrivateRouteAdmin({ children }) {
    const token = localStorage.getItem('adminToken');
    return token ? children : <Navigate to="/admin" replace />;
}

export default PrivateRouteAdmin;

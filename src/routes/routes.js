import { lazy } from 'react';
import config from '@/configs';

// Lazy load các trang
const Home = lazy(() => import('@/pages/Home'));
const GioiThieu = lazy(() => import('@/pages/GioiThieu'));
const HocLaiXeOToHangB1 = lazy(() => import('@/pages/HocLaiXeOToHangB1'));

// Lazy load Admin pages

// Lazy load Display pages

// Admin Layout

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.GioiThieu, component: GioiThieu },
    { path: config.routes.HocLaiXeOToHangB1, component: HocLaiXeOToHangB1 },

    // Admin Pages

    // Display Pages
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

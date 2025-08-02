import { lazy } from 'react';
import config from '@/configs';

// Lazy load các trang
const Home = lazy(() => import('@/pages/Home'));
const GioiThieu = lazy(() => import('@/pages/GioiThieu'));
const HocLaiXeOToHangB1 = lazy(() => import('@/pages/HocLaiXeOToHangB1'));
const HocLaiXeOToHangB2 = lazy(() => import('@/pages/HocLaiXeOToHangB2'));
const HocLaiXeOToHangC = lazy(() => import('@/pages/HocLaiXeOToHangC'));
const KhoaNangHangDLenE = lazy(() => import('@/pages/KhoaNangHangDLenE'));
const BangGiaHocPhi = lazy(() => import('@/pages/BangGiaHocPhi'));
const TinTuc = lazy(() => import('@/pages/TinTuc'));
const LienHe = lazy(() => import('@/pages/LienHe'));

// Lazy load Admin pages

// Lazy load Display pages
const DisplayTinTuc = lazy(() => import('@/pages/DisplayTinTuc'));

// Admin Layout

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.GioiThieu, component: GioiThieu },
    { path: config.routes.HocLaiXeOToHangB1, component: HocLaiXeOToHangB1 },
    { path: config.routes.HocLaiXeOToHangB2, component: HocLaiXeOToHangB2 },
    { path: config.routes.HocLaiXeOToHangC, component: HocLaiXeOToHangC },
    { path: config.routes.KhoaNangHangDLenE, component: KhoaNangHangDLenE },
    { path: config.routes.BangGiaHocPhi, component: BangGiaHocPhi },
    { path: config.routes.TinTuc, component: TinTuc },
    { path: config.routes.LienHe, component: LienHe },

    // Admin Pages

    // Display Pages
    { path: config.routes.TinTuc + `/:slug`, component: DisplayTinTuc },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

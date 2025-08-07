import { lazy } from 'react';
import config from '@/configs';

// Lazy load các trang
const Home = lazy(() => import('@/pages/Home'));
const GioiThieu = lazy(() => import('@/pages/GioiThieu'));
const KhoaHocLaiXeMoToHangA1 = lazy(() => import('@/pages/KhoaHocLaiXeMoToHangA1'));
const KhoaHocLaiXeOToHangBSoTuDong = lazy(() => import('@/pages/KhoaHocLaiXeOToHangBSoTuDong'));
const KhoaHocLaiXeOToHangBSoCoKhi = lazy(() => import('@/pages/KhoaHocLaiXeOToHangBSoCoKhi'));
const KhoaHocLaiXeOToHangC1 = lazy(() => import('@/pages/KhoaHocLaiXeOToHangC1'));
const KhoaHocLaiXeOToNangHangC = lazy(() => import('@/pages/KhoaHocLaiXeOToNangHangC'));
const BangGiaHocPhi = lazy(() => import('@/pages/BangGiaHocPhi'));
const TinTuc = lazy(() => import('@/pages/TinTuc'));
const LienHe = lazy(() => import('@/pages/LienHe'));

// Lazy load Admin pages
const Admin = lazy(() => import('@/pages/Admin'));
const AddTinTuc = lazy(() => import('@/pages/AddTinTuc'));
const ListTinTuc = lazy(() => import('@/pages/ListTinTuc'));

// Lazy load Display pages
const DisplayTinTuc = lazy(() => import('@/pages/DisplayTinTuc'));

// Admin Layout
import AdminLayout from '@/layouts/AdminLayout';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.GioiThieu, component: GioiThieu },
    { path: config.routes.KhoaHocLaiXeMoToHangA1, component: KhoaHocLaiXeMoToHangA1 },
    { path: config.routes.KhoaHocLaiXeOToHangBSoTuDong, component: KhoaHocLaiXeOToHangBSoTuDong },
    { path: config.routes.KhoaHocLaiXeOToHangBSoCoKhi, component: KhoaHocLaiXeOToHangBSoCoKhi },
    { path: config.routes.KhoaHocLaiXeOToHangC1, component: KhoaHocLaiXeOToHangC1 },
    { path: config.routes.KhoaHocLaiXeOToNangHangC, component: KhoaHocLaiXeOToNangHangC },
    { path: config.routes.BangGiaHocPhi, component: BangGiaHocPhi },
    { path: config.routes.TinTuc, component: TinTuc },
    { path: config.routes.LienHe, component: LienHe },

    // Admin Pages
    { path: config.routes.admin, component: Admin, layout: AdminLayout },
    { path: config.routes.addTinTuc, component: AddTinTuc, layout: AdminLayout },
    { path: config.routes.listTinTuc, component: ListTinTuc, layout: AdminLayout },

    // Display Pages
    { path: config.routes.TinTuc + `/:slug`, component: DisplayTinTuc },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

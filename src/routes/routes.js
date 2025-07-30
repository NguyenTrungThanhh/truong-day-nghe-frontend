import { lazy } from 'react';
import config from '@/configs';

// Lazy load các trang
const Home = lazy(() => import('@/pages/Home'));

// Lazy load Admin pages

// Lazy load Display pages

// Admin Layout

const publicRoutes = [
    { path: config.routes.home, component: Home },

    // Admin Pages

    // Display Pages
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App.jsx';
import TruongDayngheContextProvider from '@/context/TruongDayngheContext';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TruongDayngheContextProvider>
            <ToastContainer />
            <App />
        </TruongDayngheContextProvider>
    </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Providers from './utils/Providers.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Providers attribute={'class'} defaultTheme="system" enableSystem>
            <App />
            <ToastContainer />
        </Providers>
    </StrictMode>,
);

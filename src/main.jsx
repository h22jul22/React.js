import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import NotificationList from './chapter_06/NotificationList.jsx';
import SignUp from './chapter_11/SignUp.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SignUp />
    </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage.tsx'
import Admin from './pages/Admin/Admin.tsx'

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/admin',
                element: <Admin />
            }
        ]
    }
])

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);

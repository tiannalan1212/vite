import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Page from './page.jsx'


import './index.css'
import './globals.css'

const router = createBrowserRouter([
    { path: "/", element: <Page /> },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)

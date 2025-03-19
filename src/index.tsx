import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {routes} from './routes/routes.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router';

import '@ant-design/v5-patch-for-react-19';

const root = createRoot(document.getElementById('root')!);

const router = createBrowserRouter(routes);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);

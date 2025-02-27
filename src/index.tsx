import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {routes} from './routes/routes.ts';
import {createBrowserRouter, RouterProvider} from 'react-router';

const root = createRoot(document.getElementById('root')!);

const router = createBrowserRouter(routes);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);

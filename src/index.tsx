import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {routes} from './routes/routes.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router';

import '@ant-design/v5-patch-for-react-19';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const root = createRoot(document.getElementById('root')!);

const router = createBrowserRouter(routes);

const queryClient = new QueryClient();

root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>,
);

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {routes} from './routes/routes.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router';

import '@ant-design/v5-patch-for-react-19';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@libs/queryClient.ts';

const root = createRoot(document.getElementById('root')!);

const router = createBrowserRouter(routes);

root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>,
);

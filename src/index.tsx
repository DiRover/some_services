import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {routes} from './routes/routes.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router';

import '@ant-design/v5-patch-for-react-19';
import type {QueryFunction} from '@tanstack/react-query';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import axios from 'axios';

const root = createRoot(document.getElementById('root')!);

const router = createBrowserRouter(routes);

const defaultQueryFn: QueryFunction = async ({queryKey}) => {
    const url = typeof queryKey[0] == 'string' ? queryKey[0] : '';
    const params = queryKey[1];

    const {data} = await axios.get(url, {params});

    return data;
};

const queryClient = new QueryClient();

queryClient.setDefaultOptions({queries: {queryFn: defaultQueryFn}});

root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>,
);

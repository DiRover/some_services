import type {RouteObject} from 'react-router';
import ErrorPage from '../entities/error/ErrorPage.tsx';

export const routes: RouteObject[] = [
    {
        path: '/',
        lazy: () => import('../App.tsx'),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                lazy: () => import('../entities/greeting/Greeting.tsx'),
            },
            {
                path: '/services-list',
                lazy: () => import('../entities/services-list/Page.tsx'),
                children: [],
            },
        ],
    },
];

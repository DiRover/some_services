import type {RouteObject} from 'react-router';
import ErrorPage from '../entities/error/ErrorPage.tsx';
import {servicesList} from './servicesList.tsx';

export const routes: RouteObject[] = [
    {
        children: [
            {
                index: true,
                lazy: () => import('../entities/greeting/Greeting.tsx'),
            },
            {
                lazy: () => import('../entities/services-list/Page.tsx'),
                path: 'services-list',
            },
            ...servicesList,
        ],
        errorElement: <ErrorPage />,
        lazy: () => import('../App.tsx'),
        path: '/',
    },
];

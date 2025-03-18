import type {RouteObject} from 'react-router';

export const routes: RouteObject[] = [
    {
        path: '/',
        lazy: () => import('../App.tsx'),
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

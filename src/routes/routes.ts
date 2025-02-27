import {RouteObject} from 'react-router';

export const routes: RouteObject[] = [
    {
        path: '/',
        lazy: () => import('../App.tsx'),
        children: [
            {
                index: true,
                lazy: () => import('../Test.tsx'),
            },
        ],
    },
];

/**
 * Created by ROVENSKIY D.A. on 20.03.2025
 */
import type {RouteObject} from 'react-router';
import {loaderUser} from '../entities/crud-service/loader.ts';

export const servicesList: RouteObject[] = [
    {
        children: [
            {
                index: true,
                lazy: () => import('../entities/crud-service/List.tsx'),
            },
            {
                lazy: () => import('../entities/crud-service/FormUser.tsx'),
                path: 'form-user',
            },
            {
                lazy: () => import('../entities/crud-service/UserPage.tsx'),
                loader: loaderUser(),
                path: ':id',
            },
        ],
        lazy: () => import('../entities/crud-service/Page.tsx'),
        path: 'crud',
    },
];

/**
 * Created by ROVENSKIY D.A. on 20.03.2025
 */
import type {RouteObject} from 'react-router';

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
                children: [
                    {
                        index: true,
                        lazy: () =>
                            import('../entities/crud-service/CardUser.tsx'),
                    },
                    {
                        lazy: () =>
                            import('../entities/crud-service/FormUser.tsx'),
                        path: 'edit-user',
                    },
                ],
                lazy: () => import('../entities/crud-service/PageUser.tsx'),
                path: ':id',
            },
        ],
        lazy: () => import('../entities/crud-service/Page.tsx'),
        path: 'crud',
    },
    {
        children: [
            {index: true, lazy: () => import('../entities/chat/Page.tsx')},
        ],
        path: 'chat',
    },
];

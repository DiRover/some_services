/**
 * Created by ROVENSKIY D.A. on 20.03.2025
 */
import type {RouteObject} from 'react-router';

export const servicesList: RouteObject[] = [
    {
        path: 'crud',
        lazy: () => import('../entities/crud-service/Page.tsx'),
    },
];

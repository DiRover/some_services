/**
 * Created by ROVENSKIY D.A. on 25.02.2025
 */
import {memo} from 'react';
import {Outlet} from 'react-router';

export const Component = memo(() => {
    return (
        <div className="bg-orange-900">
            <div>Hi</div>

            <Outlet />
        </div>
    );
});

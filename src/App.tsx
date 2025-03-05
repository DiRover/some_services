/**
 * Created by ROVENSKIY D.A. on 25.02.2025
 */
import {memo} from 'react';
import {Outlet} from 'react-router';
import AppBackground from './components/view/AppBackground.tsx';
import AppWrapper from './components/view/AppWrapper.tsx';

export const Component = memo(() => {
    return (
        <div className="h-screen w-full">
            <AppBackground />

            <AppWrapper>
                <Outlet />
            </AppWrapper>
        </div>
    );
});

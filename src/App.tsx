/**
 * Created by ROVENSKIY D.A. on 25.02.2025
 */
import {memo} from 'react';
import {Outlet} from 'react-router';
import AppBackground from './components/view/AppBackground.tsx';
import AppWrapper from './components/view/AppWrapper.tsx';
import Header from '@components/Header.tsx';

export const Component = memo(() => {
    return (
        <div className="grid h-full w-full grid-rows-[64px_1fr]">
            <AppBackground />

            <Header />

            <AppWrapper>
                <Outlet />
            </AppWrapper>
        </div>
    );
});

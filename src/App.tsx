/**
 * Created by ROVENSKIY D.A. on 25.02.2025
 */
import {memo} from 'react';
import {Outlet} from 'react-router';
import AppBackground from '@components/view/background/AppBackground.tsx';
import AppWrapper from './components/view/AppWrapper.tsx';
import Header from '@components/Header.tsx';
import {useAtomValue} from 'jotai';
import {atomDarkMode} from './atoms/darkMode.ts';
import AppBackgroundLight from '@components/view/background/AppBackgroundLight.tsx';

export const Component = memo(() => {
    const darkMode = useAtomValue(atomDarkMode);
    return (
        <div className="grid h-full w-full grid-rows-[64px_1fr]">
            {darkMode ? <AppBackground /> : <AppBackgroundLight />}

            <Header />

            <AppWrapper>
                <Outlet />
            </AppWrapper>
        </div>
    );
});

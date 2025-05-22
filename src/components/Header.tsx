/**
 * Created by ROVENSKIY D.A. on 28.04.2025
 */
import {memo, useCallback, useEffect} from 'react';
import Moon from '@assets/moon-svgrepo-com.svg?react';
import Sun from '@assets/sun-svgrepo-com.svg?react';
import Github from '@assets/github-svgrepo-com.svg?react';
import {Link} from 'react-router';
import {Button} from 'antd';
import {useAtom} from 'jotai';
import {atomDarkMode} from '../atoms/darkMode.ts';

const Header = memo(() => {
    const [dark, setDark] = useAtom(atomDarkMode);

    useEffect(() => {
        const rootElem = document.getElementById('root');
        if (rootElem) {
            if (dark) {
                rootElem.classList.add('dark');
            } else {
                rootElem.classList.remove('dark');
            }
        }
    }, [dark]);

    const onModeChang = useCallback(() => {
        setDark(prev => !prev);
    }, [setDark]);

    return (
        <div className="bg-header-bg flex justify-end p-4">
            <div className="flex gap-x-4">
                <Link to="https://github.com/DiRover/some_services">
                    <Github className="size-full" />
                </Link>

                <Button
                    icon={
                        dark ? (
                            <Sun className="w-full" />
                        ) : (
                            <Moon className="w-full" />
                        )
                    }
                    className="self-center text-white"
                    size="large"
                    type="text"
                    onClick={onModeChang}
                />
            </div>
        </div>
    );
});

export default Header;

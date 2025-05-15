/**
 * Created by ROVENSKIY D.A. on 28.04.2025
 */
import {memo} from 'react';
import Dark from '@assets/moon-svgrepo-com.svg?react';
import Github from '@assets/github-svgrepo-com.svg?react';
import {Link} from 'react-router';
import {Button} from 'antd';

const Header = memo(() => {
    return (
        <div className="flex justify-end bg-black p-2">
            <div className="flex gap-x-4">
                <Link to="https://github.com/">
                    <Github className="size-full" />
                </Link>

                <Button
                    icon={<Dark className="w-full text-white" />}
                    className="self-center text-white"
                    size="large"
                    type="text"
                />
            </div>
        </div>
    );
});

export default Header;

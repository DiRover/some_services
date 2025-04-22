/**
 * Created by ROVENSKIY D.A. on 03.03.2025
 */
import {memo} from 'react';
import TypingText from '../../components/text/TypingText.tsx';
import {Link} from 'react-router';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';

export const Component = memo(() => {
    return (
        <div className="dialog box-content flex h-1/2 w-1/3 flex-col justify-between">
            <div className="flex flex-col gap-y-4">
                <h1>Welcome to my portfolio page!</h1>

                <span>/ / / / /</span>

                <TypingText phrase="My name is Dmitry Rovensky, I am a front-end developer. This application was created for my portfolio only." />
            </div>

            <SpinningFrame className="self-end">
                <Link to="services-list">Go -&gt;</Link>
            </SpinningFrame>
        </div>
    );
});

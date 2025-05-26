/**
 * Created by ROVENSKIY D.A. on 03.03.2025
 */
import {memo} from 'react';
import TypingText from '../../components/text/TypingText.tsx';
import {Link} from 'react-router';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';

const text =
    'My name is Dmitry Rovensky, I am a front-end developer. This application was created for my portfolio only.\n' +
    '\n' +
    'The main tech stack used in this application includes:\n' +
    '• React v19\n' +
    '• Vite v6\n' +
    '• Ant Design v5\n' +
    '• Jotai v2\n' +
    '• React Router v7\n' +
    '• React Query v5\n' +
    '• Tailwind CSS v4';

export const Component = memo(() => {
    return (
        <div className="dialog box-content flex h-3/5 w-1/3 flex-col justify-between place-self-center">
            <div className="flex flex-col gap-y-4">
                <h1>Welcome to my portfolio page!</h1>

                <TypingText phrase={text} className="whitespace-pre-line" />
            </div>

            <SpinningFrame className="self-end">
                <Link to="/services-list">Go -&gt;</Link>
            </SpinningFrame>
        </div>
    );
});

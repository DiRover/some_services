/**
 * Created by ROVENSKIY D.A. on 03.03.2025
 */
import {memo} from 'react';
import DialogFrame from '../dialog-frame/DialogFrame.tsx';
import TypingText from '../components/text/TypingText.tsx';

export const Component = memo(() => {
    return (
        <DialogFrame>
            <div className="flex flex-col gap-y-4 text-fuchsia-500">
                <h1>Welcome to my portfolio page!</h1>

                <span>/ / / / /</span>

                <TypingText phrase="My name is Dmitry Rovensky, I am a front-end developer. This application was created for my portfolio only." />
            </div>
        </DialogFrame>
    );
});

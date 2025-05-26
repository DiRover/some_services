/**
 * Created by ROVENSKIY D.A. on 05.03.2025
 */
import type {HTMLProps} from 'react';
import {memo, useEffect, useState} from 'react';

const TypingText = memo<
    {phrase: string} & Pick<HTMLProps<HTMLDivElement>, 'className'>
>(({className, phrase}) => {
    const [textState, setTextState] = useState<{text: string; index: number}>({
        index: 0,
        text: '',
    });

    useEffect(() => {
        if (textState.index < phrase.length) {
            const timeout = setTimeout(() => {
                setTextState(prev => ({
                    index: prev.index + 1,
                    text: prev.text + phrase[textState.index],
                }));
            }, 10);

            return () => clearTimeout(timeout);
        }
    }, [textState, phrase]);

    return <span className={className}>{textState.text}</span>;
});

export default TypingText;

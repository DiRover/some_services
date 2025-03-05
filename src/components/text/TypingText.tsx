/**
 * Created by ROVENSKIY D.A. on 05.03.2025
 */
import {HTMLProps, memo, useEffect, useState} from 'react';

const TypingText = memo<
    {phrase: string} & Pick<HTMLProps<HTMLDivElement>, 'className'>
>(({phrase, className}) => {
    const [textState, setTextState] = useState<{text: string; index: number}>({
        text: '',
        index: 0,
    });

    useEffect(() => {
        if (textState.index < phrase.length) {
            const timeout = setTimeout(() => {
                setTextState(prev => ({
                    text: prev.text + phrase[textState.index],
                    index: prev.index + 1,
                }));
            }, 40);

            return () => clearTimeout(timeout);
        }
    }, [textState, phrase]);

    return <span className={className}>{textState.text}</span>;
});

export default TypingText;

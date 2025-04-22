/**
 * Created by ROVENSKIY D.A. on 04.03.2025
 */
import type {PropsWithChildren} from 'react';
import {useCallback} from 'react';
import {useRef} from 'react';
import {useMemo} from 'react';
import {memo} from 'react';
import './styles.css';
import {twMerge} from 'tailwind-merge';

const SpinningFrame = memo<
    PropsWithChildren<{className?: HTMLDivElement['className']}>
>(({children, className}) => {
    const styles = useMemo(
        () => twMerge('spinning-frame', className),
        [className],
    );

    const frame = useRef<HTMLDivElement>(null);

    const handleClick = useCallback(() => {
        const target = frame.current?.querySelector<HTMLElement>('*:not(i)');

        target?.click();
    }, []);

    return (
        <div className={styles} ref={frame} onClick={handleClick}>
            <i aria-hidden={true} />
            {children}
        </div>
    );
});

export default SpinningFrame;

/**
 * Created by ROVENSKIY D.A. on 04.03.2025
 */
import type {PropsWithChildren} from 'react';
import {useMemo} from 'react';
import {memo} from 'react';
import './styles.css';
import {twMerge} from 'tailwind-merge';

const SpinningFrame = memo<
    PropsWithChildren<{
        className?: HTMLDivElement['className'];
        showFrame?: boolean;
    }>
>(({children, className, showFrame = true}) => {
    const styles = useMemo(
        () => twMerge('spinning-frame', className),
        [className],
    );

    if (!showFrame) return <>{children}</>;

    return (
        <div className={styles}>
            <i aria-hidden={true} />
            {children}
        </div>
    );
});

export default SpinningFrame;

/**
 * Created by ROVENSKIY D.A. on 04.03.2025
 */
import type {PropsWithChildren} from 'react';
import {memo} from 'react';
import './styles.css';
import {twMerge} from 'tailwind-merge';

const SpinningFrame = memo<
    PropsWithChildren<{className?: HTMLDivElement['className']}>
>(({children, className}) => {
    const styles = twMerge('spinning-frame', className);

    return (
        <div className={styles}>
            <i aria-hidden={true} />
            {children}
        </div>
    );
});

export default SpinningFrame;

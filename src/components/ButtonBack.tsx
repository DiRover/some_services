/**
 * Created by ROVENSKIY D.A. on 16.04.2025
 */
import {memo, useMemo} from 'react';
import {Link} from 'react-router';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';

const ButtonBack = memo<{className?: HTMLDivElement['className']; to?: string}>(
    ({to, ...props}) => {
        const direction = useMemo(() => to || '..', [to]);

        return (
            <SpinningFrame {...props}>
                <Link to={direction} className="!text-everywhere-color">
                    &lt;- Back
                </Link>
            </SpinningFrame>
        );
    },
);

export default ButtonBack;

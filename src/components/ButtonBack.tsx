/**
 * Created by ROVENSKIY D.A. on 16.04.2025
 */
import {memo} from 'react';
import {Link} from 'react-router';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';

const ButtonBack = memo<{className?: HTMLDivElement['className']}>(props => {
    return (
        <SpinningFrame {...props}>
            <Link to=".." className="!text-fuchsia-500">
                &lt;- Back
            </Link>
        </SpinningFrame>
    );
});

export default ButtonBack;

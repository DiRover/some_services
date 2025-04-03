/**
 * Created by ROVENSKIY D.A. on 04.03.2025
 */
import type {PropsWithChildren} from 'react';
import {memo} from 'react';

const AppWrapper = memo<PropsWithChildren>(({children}) => {
    return (
        <div className="flex h-full items-center justify-center p-8">
            {children}
        </div>
    );
});

export default AppWrapper;

/**
 * Created by ROVENSKIY D.A. on 04.03.2025
 */
import {memo, PropsWithChildren} from 'react';

const AppWrapper = memo<PropsWithChildren>(({children}) => {
    return <div className="flex h-full items-center justify-center p-8">{children}</div>;
});

export default AppWrapper;

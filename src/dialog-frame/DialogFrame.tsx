/**
 * Created by ROVENSKIY D.A. on 04.03.2025
 */
import {memo, PropsWithChildren} from 'react';
import './styles.css';

const DialogFrame = memo<PropsWithChildren>(({children}) => {
    return (
        <div className="dialog-frame h-1/2 w-1/2">
            <i aria-hidden={true} style={{opacity: 1}} />
            {children}
        </div>
    );
});

export default DialogFrame;

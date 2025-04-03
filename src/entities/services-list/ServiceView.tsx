/**
 * Created by ROVENSKIY D.A. on 14.03.2025
 */
import {memo, useCallback} from 'react';
import type {Service} from './types.ts';
import {useNavigate} from 'react-router';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';

const ServiceView = memo<{service: Service}>(({service}) => {
    const navigate = useNavigate();
    const {title, link, description} = service;

    const onClick = useCallback(() => {
        navigate(`../${link}`);
    }, []);

    return (
        <SpinningFrame className="!p-0">
            <div
                onClick={onClick}
                className="dialog flex h-full w-full flex-col gap-4 border"
            >
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </SpinningFrame>
    );
});

export default ServiceView;

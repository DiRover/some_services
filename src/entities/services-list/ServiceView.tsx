/**
 * Created by ROVENSKIY D.A. on 14.03.2025
 */
import {memo, useCallback} from 'react';
import type {Service} from './types.ts';
import {useNavigate} from 'react-router';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';

const ServiceView = memo<{service: Service}>(({service}) => {
    const navigate = useNavigate();
    const {description, link, title} = service;

    const onClick = useCallback(() => {
        navigate(`../${link}`);
    }, [link, navigate]);

    return (
        <SpinningFrame className="!p-0">
            <div
                onClick={onClick}
                className="dialog flex h-full w-full flex-col gap-4 border hover:border-0"
            >
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </SpinningFrame>
    );
});

export default ServiceView;

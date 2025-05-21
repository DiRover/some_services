/**
 * Created by ROVENSKIY D.A. on 14.03.2025
 */
import {memo, useCallback} from 'react';
import type {Service} from './types.ts';
import {useNavigate} from 'react-router';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';
import {twMerge} from 'tailwind-merge';

const ServiceView = memo<{service: Service}>(({service}) => {
    const navigate = useNavigate();
    const {description, link, title} = service;

    const isServiceExist = !!link;

    const onClick = useCallback(() => {
        if (isServiceExist) {
            navigate(`../${link}`);
        }
    }, [isServiceExist, link, navigate]);

    return (
        <SpinningFrame className="!p-0" showFrame={isServiceExist}>
            <div
                onClick={onClick}
                className={twMerge(
                    'dialog flex h-full min-w-full flex-col gap-4 border',
                    isServiceExist
                        ? 'cursor-pointer hover:border-transparent'
                        : '',
                )}
            >
                <h2>{title}</h2>
                <div>{description}</div>
            </div>
        </SpinningFrame>
    );
});

export default ServiceView;

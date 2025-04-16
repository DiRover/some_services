/**
 * Created by ROVENSKIY D.A. on 07.04.2025
 */
import {memo, useMemo} from 'react';
import {twMerge} from 'tailwind-merge';
import {NO_DATA} from '@libs/constants.ts';

export interface Address {
    city: string;
    state: string;
    stateCode: string;
}

export const AddressView = memo<{address?: Address; isInline?: boolean}>(
    ({address, isInline = false}) => {
        const style = useMemo(
            () => twMerge('flex', isInline ? 'gap-x-2' : 'flex-col gap-y-2'),
            [isInline],
        );

        if (!address) return NO_DATA;

        const {city, state, stateCode} = address;

        return (
            <div className={style}>
                <p>{state}</p>
                <p>{stateCode}</p>
                <p>{city}</p>
            </div>
        );
    },
);

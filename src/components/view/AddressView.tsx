/**
 * Created by ROVENSKIY D.A. on 07.04.2025
 */
import {memo} from 'react';

export interface Address {
    city: string;
    state: string;
    stateCode: string;
}

export const AddressView = memo<{address: Address}>(
    ({address: {city, state, stateCode}}) => {
        return (
            <div className="flex flex-col gap-y-2">
                <p>{state}</p>
                <p>{stateCode}</p>
                <p>{city}</p>
            </div>
        );
    },
);

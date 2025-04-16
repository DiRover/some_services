/**
 * Created by ROVENSKIY D.A. on 15.04.2025
 */
import {memo, useMemo} from 'react';
import {NO_DATA} from '@libs/constants.ts';

interface ViewInfoLineProps {
    isLastLine?: boolean;
    title: string;
    value?: string | number;
}

const ViewInfoLine = memo<ViewInfoLineProps>(
    ({isLastLine = false, title, value}) => {
        const currentValue = useMemo(
            () =>
                typeof value === 'number' ||
                (typeof value === 'string' && value.length > 0)
                    ? value
                    : NO_DATA,
            [value],
        );

        return (
            <div
                className={`${isLastLine ? 'border-b border-fuchsia-500' : ''}`}
            >
                <p>{title}:</p>
                <p>{currentValue}</p>
            </div>
        );
    },
);

export default ViewInfoLine;

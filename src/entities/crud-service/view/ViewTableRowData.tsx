/**
 * Created by ROVENSKIY D.A. on 22.04.2025
 */
import {memo} from 'react';
import {NO_DATA} from '@libs/constants.ts';

interface ViewTableRowDataProps {
    value?: string;
}

const ViewTableRowData = memo<ViewTableRowDataProps>(({value}) => {
    return <>{value || NO_DATA}</>;
});

export default ViewTableRowData;

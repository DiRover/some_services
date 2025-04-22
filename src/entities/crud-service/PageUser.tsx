/**
 * Created by ROVENSKIY D.A. on 16.04.2025
 */
import {memo} from 'react';
import {Outlet, useParams} from 'react-router';
import {ContextUser} from './ContextUser.ts';
import ErrorPage from '../error/ErrorPage.tsx';
import {atomUser} from '../../atoms/atomUser.ts';
import {useAtomValue} from 'jotai';

export const Component = memo(() => {
    const {id} = useParams();
    const user = useAtomValue(atomUser(id!));

    if (!user) {
        return <ErrorPage />;
    }

    return (
        <ContextUser value={user}>
            <Outlet />
        </ContextUser>
    );
});

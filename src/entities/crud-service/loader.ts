import type {LoaderFunction, LoaderFunctionArgs} from 'react-router';
import {keyUserListInSessionStorage} from '../../atoms/atomUser.ts';
import type {UserDummyJson} from './types.ts';

export const loaderUser =
    (): LoaderFunction =>
    ({params}: LoaderFunctionArgs) => {
        if (!params.id) {
            throw new Error('No ID provided');
        }

        const storedValue = sessionStorage.getItem(keyUserListInSessionStorage);
        const userList: UserDummyJson[] = JSON.parse(storedValue ?? '');

        const user = userList.find(user => user.id == params.id);

        return {user};
    };

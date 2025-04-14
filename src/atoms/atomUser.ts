import {atom} from 'jotai';
import type {UserDummyJson} from '../entities/crud-service/types.ts';

export const atomUserList = atom<UserDummyJson[]>([]);

export const atomUser = atom<null, UserDummyJson[], void>(
    null,
    (get, set, newValue) => {
        const oldValue = get(atomUserList);

        const exists = oldValue.some(user => user.id === newValue.id);

        const currentValue = exists
            ? oldValue.filter(user => user.id !== newValue.id)
            : [...oldValue, newValue];

        set(atomUserList, currentValue);
    },
);

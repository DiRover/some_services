import {atom} from 'jotai';
import type {UserDummyJson} from '../entities/crud-service/types.ts';
import {atomWithStorage} from 'jotai/utils';

export const keyUserListInSessionStorage = 'user-list';

export const atomUserListInSessionStorage = atomWithStorage<UserDummyJson[]>(
    keyUserListInSessionStorage,
    [],
    {
        getItem(key, initialValue) {
            const storedValue = sessionStorage.getItem(key);
            try {
                return JSON.parse(storedValue ?? '');
            } catch {
                return initialValue;
            }
        },
        removeItem(key) {
            sessionStorage.removeItem(key);
        },
        setItem(key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
        },
    },
);

export const atomUser = atom<null, UserDummyJson[], void>(
    null,
    (get, set, newValue) => {
        const oldValue = get(atomUserListInSessionStorage);

        const exists = oldValue.some(user => user.id === newValue.id);

        const currentValue = exists
            ? oldValue.filter(user => user.id !== newValue.id)
            : [...oldValue, newValue];

        set(atomUserListInSessionStorage, currentValue);
    },
);

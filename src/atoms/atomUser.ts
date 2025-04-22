import type {Atom} from 'jotai';
import {atom} from 'jotai';
import type {UserDummyJson} from '../entities/crud-service/types.ts';
import {atomFamily, atomWithStorage} from 'jotai/utils';

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

export const atomUser = atomFamily<string, Atom<UserDummyJson | undefined>>(
    id =>
        atom(get => {
            const list = get(atomUserListInSessionStorage);
            return list.find(user => user.id == id);
        }),
);

export const atomUserList = atom<
    null,
    (UserDummyJson | string | number)[],
    void
>(null, (get, set, value) => {
    const oldList = get(atomUserListInSessionStorage);

    let exists;
    let updated;

    if (typeof value === 'string' || typeof value === 'number') {
        updated = oldList.filter(user => user.id !== value);
    } else {
        exists = oldList.some(user => user.id === value.id);

        updated = exists
            ? oldList.map(user => (user.id === value.id ? value : user))
            : [...oldList, value];
    }

    set(atomUserListInSessionStorage, updated);
});

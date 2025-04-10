import {atom} from 'jotai';
import type {UserDummyJson} from '../entities/crud-service/types.ts';

export const atomUser = atom<UserDummyJson[]>([]);

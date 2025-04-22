import {createContext} from 'react';
import type {UserDummyJson} from './types.ts';

export const ContextUser = createContext<UserDummyJson | null>(null);

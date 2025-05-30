import type {BaseDTO, PaginationResponse} from '../../types.ts';
import type {Address} from '@components/view/AddressView.tsx';

export interface UserFromMockApi extends BaseDTO {
    avatar: string;
    companyName: string;
    country: string;
    createdAt: string;
    department: string;
    email: string;
    gender: string;
    job: string;
    lastName: string;
    name: string;
    phone: string;
    vehicleType: string;
}

export const GENDER = {
    FEMALE: 'female',
    MALE: 'male',
    OTHER: 'other',
} as const;

type GENDER_NAME = keyof typeof GENDER;

export interface UserDummyJson extends BaseDTO {
    address: Address;
    age?: number;
    birthDate?: string;
    company?: Company;
    email?: string;
    firstName: string;
    gender: GENDER_NAME;
    image?: string;
    lastName: string;
    maidenName?: string;
    phone: number;
    role?: string;
}

export type UserFormValue = Omit<
    UserDummyJson,
    'id' | 'image' | 'age' | 'birthDate' | 'role' | 'address'
>;

export interface Company extends BaseDTO {
    address: Address;
    name: string;
}

export interface Job extends BaseDTO {
    name: string;
    type: string;
}

export interface UserResponse extends PaginationResponse {
    users: UserDummyJson[];
}

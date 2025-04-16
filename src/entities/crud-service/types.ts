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

export interface UserDummyJson extends BaseDTO {
    address: Address;
    age?: number;
    birthDate?: string;
    company?: Company;
    email?: string;
    firstName: string;
    gender?: GENDER;
    image?: string;
    lastName: string;
    maidenName?: string;
    phone: number;
    role?: string;
}

export enum GENDER {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
}

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

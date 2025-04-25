/**
 * Created by ROVENSKIY D.A. on 03.04.2025
 */
import {memo, useCallback, useContext, useMemo} from 'react';
import {Form, Input, Radio} from 'antd';
import type {CheckboxGroupProps} from 'antd/es/checkbox';
import type {UserDummyJson, UserFormValue} from './types.ts';
import {GENDER} from './types.ts';
import {useMutation} from '@tanstack/react-query';
import API from '@libs/API.ts';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';
import {useNavigate} from 'react-router';
import type {AxiosError, AxiosResponse} from 'axios';
import axios from 'axios';
import {useSetAtom} from 'jotai';
import {atomUserList} from '../../atoms/atomUser.ts';
import ButtonBack from '@components/ButtonBack.tsx';
import CompanyField from './form-fields/CompanyField.tsx';
import {ContextUser} from './ContextUser.ts';

const {Item} = Form;

const genderOptions: CheckboxGroupProps<string>['options'] = [
    {label: 'Male', value: GENDER.MALE},
    {label: 'Female', value: GENDER.FEMALE},
    {label: 'Other', value: GENDER.OTHER},
];

export const Component = memo(() => {
    const user = useContext(ContextUser);

    const initialValues = useMemo(() => user ?? {}, [user]);

    const navigate = useNavigate();

    const setUserInList = useSetAtom(atomUserList);

    const {isPending, mutate} = useMutation<
        AxiosResponse<UserDummyJson>,
        AxiosError,
        UserFormValue
    >({
        mutationFn: value =>
            user
                ? axios.put(API.users(user.id), value)
                : axios.post(API.users('add'), value),
        onError: (error, variables) => {
            if (error.status === 404 && user) {
                const newValue: UserDummyJson = {
                    ...variables,
                    address: user.address,
                    id: user.id,
                };
                setUserInList(newValue);
                navigate('/crud');
            }
        },
        onSuccess: data => {
            setUserInList(data.data);
            navigate('/crud');
        },
    });

    const onFinish = useCallback(
        (value: UserFormValue) => {
            const {gender, ...rest} = value;
            mutate({gender: gender || GENDER.OTHER, ...rest});
        },
        [mutate],
    );

    return (
        <div className="flex flex-col gap-y-8">
            <Form
                name="form-user"
                layout="vertical"
                className="flex flex-col self-stretch"
                onFinish={onFinish}
                initialValues={initialValues}
            >
                <div className="flex justify-between !text-xl">
                    <ButtonBack />

                    <SpinningFrame>
                        <button
                            type="submit"
                            form="form-user"
                            className="text-fuchsia-500 hover:cursor-pointer"
                            disabled={isPending}
                        >
                            Save
                        </button>
                    </SpinningFrame>
                </div>

                <div className="grid grid-cols-3 gap-x-8">
                    <Item
                        label="First Name"
                        name="firstName"
                        rules={[
                            {
                                message: 'field "First Name" is required',
                                required: true,
                            },
                            {
                                message: 'Only letters are allowed',
                                type: 'string',
                            },
                        ]}
                    >
                        <Input />
                    </Item>

                    <Item
                        label="Middle Name"
                        name="maidenName"
                        rules={[
                            {
                                message: 'Only letters are allowed',
                                type: 'string',
                            },
                        ]}
                    >
                        <Input />
                    </Item>

                    <Item
                        label="Last Name"
                        name="lastName"
                        rules={[
                            {
                                message: 'field "Last Name" is required',
                                required: true,
                            },
                            {
                                message: 'Only letters are allowed',
                                type: 'string',
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </div>

                <Item label="Gender" name="gender">
                    <Radio.Group
                        block
                        options={genderOptions}
                        optionType="button"
                    />
                </Item>

                <div className="grid grid-cols-2 gap-x-8">
                    <Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                message: 'field "Phone" is required',
                                required: true,
                            },
                        ]}
                    >
                        <Input autoComplete="phone" inputMode="tel" />
                    </Item>

                    <Item label="Email" name="email">
                        <Input autoComplete="email" placeholder="email" />
                    </Item>
                </div>

                <CompanyField />
            </Form>
        </div>
    );
});

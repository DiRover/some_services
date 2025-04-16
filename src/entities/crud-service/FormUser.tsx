/**
 * Created by ROVENSKIY D.A. on 03.04.2025
 */
import {memo, useCallback, useMemo} from 'react';
import {Form, Input, Radio, Select} from 'antd';
import type {CheckboxGroupProps} from 'antd/es/checkbox';
import type {Company, UserDummyJson} from './types.ts';
import {GENDER} from './types.ts';
import {useMutation, useQuery} from '@tanstack/react-query';
import API from '../../libs/API.ts';
import type {SelectProps} from 'antd';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';
import {useNavigate} from 'react-router';
import type {AxiosResponse} from 'axios';
import axios from 'axios';
import {useSetAtom} from 'jotai';
import {atomUser} from '../../atoms/atomUser.ts';
import ButtonBack from '@components/ButtonBack.tsx';

const {Item} = Form;

const {Option} = Select;

const genderOptions: CheckboxGroupProps<string>['options'] = [
    {label: 'Male', value: GENDER.MALE},
    {label: 'Female', value: GENDER.FEMALE},
    {label: 'Other', value: GENDER.OTHER},
];

const selectAfter = (
    <Select defaultValue=".com">
        <Option value=".com">.com</Option>
        <Option value=".net">.net</Option>
        <Option value=".cc">.cc</Option>
    </Select>
);

export const Component = memo(() => {
    const {data: companies} = useQuery<Company[]>({
        queryKey: [API.companies()],
    });

    const navigate = useNavigate();

    const setUserInList = useSetAtom(atomUser);

    const {isPending, mutate} = useMutation<
        AxiosResponse<UserDummyJson>,
        unknown,
        UserDummyJson
    >({
        mutationFn: value => axios.post(API.users('add'), value),
        onSuccess: data => {
            setUserInList(data.data);
            navigate('..');
        },
    });

    const companiesOptions = useMemo<SelectProps['options']>(
        () =>
            companies?.map(company => ({
                title: company.name,
                value: company.name,
            })),
        [companies],
    );

    const onFinish = useCallback(
        (value: UserDummyJson) => {
            mutate(value);
        },
        [mutate],
    );

    return (
        <div className="flex flex-col gap-y-8">
            <div className="flex justify-between">
                <ButtonBack className="inline-block" />

                <SpinningFrame className="inline-block">
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

            <Form
                name="form-user"
                layout="vertical"
                className="flex flex-col self-stretch"
                onFinish={onFinish}
            >
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
                        <Input
                            autoComplete="email"
                            placeholder="email"
                            addonAfter={selectAfter}
                        />
                    </Item>
                </div>

                <Item label="Company" name="company">
                    <Select
                        className="ant-select-selector-custom"
                        options={companiesOptions}
                    />
                </Item>
            </Form>
        </div>
    );
});

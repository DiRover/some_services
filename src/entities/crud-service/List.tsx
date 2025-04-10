/**
 * Created by ROVENSKIY D.A. on 03.04.2025
 */
import {memo, useEffect, useRef, useState} from 'react';
import {Button, Table} from 'antd';
import {useQuery} from '@tanstack/react-query';
import type {UserDummyJson, UserResponse} from './types.ts';
import LoadingIndicator from '@components/LoadingIndicator.tsx';
import type {ColumnsType} from 'antd/es/table';
import {useNavigate} from 'react-router';
import {AddressView} from '@components/view/AddressView.tsx';
import API from '@libs/API.ts';
import {NO_DATA} from '@libs/constants.ts';
import type {PaginationParams} from '../../types.ts';

const columns: ColumnsType<UserDummyJson> = [
    {
        dataIndex: 'firstName',
        title: 'Name',
        width: '100px',
    },
    {
        key: 'maidenName',
        render: (_, record) => <>{record.maidenName || NO_DATA}</>,
        title: 'Middle Name',
        width: '100px',
    },
    {
        dataIndex: 'lastName',
        title: 'Last Name',
        width: '100px',
    },
    {
        dataIndex: 'birthDate',
        title: 'Birth Date',
        width: '120px',
    },
    {
        dataIndex: 'gender',
        title: 'Gender',
        width: '100px',
    },
    {
        dataIndex: 'phone',
        title: 'phone',
    },
    {
        dataIndex: 'email',
        title: 'email',
    },
    {
        key: 'address',
        render: (_, {address}) => <AddressView address={address} />,
        title: 'Address',
        width: '200px',
    },
    {
        key: 'company',
        render: (_, {company}) =>
            company ? (
                <div className="flex flex-col gap-y-2">
                    <p>Name: {company.name}</p>
                    <p>Address:</p>
                    <AddressView address={company.address} />
                </div>
            ) : (
                NO_DATA
            ),
        title: 'Company',
        width: '250px',
    },
];

const userListPaginationParams: PaginationParams = {limit: 3, skip: 1};

export const Component = memo(() => {
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const {data, isLoading} = useQuery<UserResponse>({
        queryKey: [API.users(), userListPaginationParams],
    });

    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setHeight(
                containerRef.current?.getBoundingClientRect().height - 150,
            );
        }
    }, [data]);

    if (isLoading) return <LoadingIndicator />;

    return (
        <div ref={containerRef} className="h-full">
            <Button onClick={() => navigate('form-user')}>Create</Button>
            <Table
                rowKey="id"
                columns={columns}
                dataSource={data?.users}
                scroll={{y: height}}
            />
        </div>
    );
});

/**
 * Created by ROVENSKIY D.A. on 03.04.2025
 */
import {memo, useCallback, useEffect, useRef, useState} from 'react';
import {Table} from 'antd';
import {useQuery} from '@tanstack/react-query';
import type {UserDummyJson, UserResponse} from './types.ts';
import LoadingIndicator from '@components/LoadingIndicator.tsx';
import type {ColumnsType} from 'antd/es/table';
import {Link} from 'react-router';
import {AddressView} from '@components/view/AddressView.tsx';
import API from '@libs/API.ts';
import {NO_DATA} from '@libs/constants.ts';
import type {PaginationParams} from '../../types.ts';
import {useAtom} from 'jotai';
import {atomUserListInSessionStorage} from '../../atoms/atomUser.ts';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';
import type {TableProps} from 'antd';
import {useNavigate} from 'react-router';

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

export const userListPaginationParams: PaginationParams = {limit: 3, skip: 1};

type onRowClickFunctionType = Required<
    Pick<TableProps<UserDummyJson>, 'onRow'>
>['onRow'];

export const Component = memo(() => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [userListInSessionStorage, setUserListInSessionStorage] = useAtom(
        atomUserListInSessionStorage,
    );
    const navigate = useNavigate();

    const isUserListReceived = !!userListInSessionStorage.length;

    const {data, isLoading} = useQuery<UserResponse>({
        enabled: !isUserListReceived,
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

    useEffect(() => {
        if (!isUserListReceived) {
            setUserListInSessionStorage(data?.users ?? []);
        }
    }, [data]);

    const onClickOnRow = useCallback<onRowClickFunctionType>(
        row => ({
            onClick: () => navigate(`${row.id}`),
        }),
        [navigate],
    );

    if (isLoading) return <LoadingIndicator />;

    return (
        <div ref={containerRef} className="h-full">
            <SpinningFrame className="inline-block">
                <Link to="form-user" className="text-fuchsia-500">
                    Add new user
                </Link>
            </SpinningFrame>

            <Table
                rowKey="id"
                columns={columns}
                dataSource={userListInSessionStorage}
                scroll={{y: height}}
                onRow={onClickOnRow}
            />
        </div>
    );
});

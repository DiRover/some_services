/**
 * Created by ROVENSKIY D.A. on 20.03.2025
 */
import {memo, useEffect, useRef, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import API from '../../libs/API.ts';
import LoadingIndicator from '@components/LoadingIndicator.tsx';
import type {User} from './types.ts';
import type {ColumnsType} from 'antd/es/table';
import {Table} from 'antd';

const columns: ColumnsType<User> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'lastName',
        dataIndex: 'lastName',
    },
    {
        title: 'country',
        dataIndex: 'country',
    },
    {
        title: 'companyName',
        dataIndex: 'companyName',
    },
    {
        title: 'department',
        dataIndex: 'department',
    },
    {
        title: 'email',
        dataIndex: 'email',
    },
    {
        title: 'gender',
        dataIndex: 'gender',
    },
    {
        title: 'vehicleType',
        dataIndex: 'vehicleType',
    },
    {
        title: 'phone',
        dataIndex: 'phone',
    },
    {
        title: 'job',
        dataIndex: 'job',
    },
];

export const Component = memo(() => {
    const containerRef = useRef<HTMLDivElement>(null);

    const {data, isLoading} = useQuery<User[]>({
        queryKey: [API.users()],
    });

    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setHeight(
                containerRef.current?.getBoundingClientRect().height - 100,
            );
        }
    }, [data]);

    if (isLoading) return <LoadingIndicator />;

    return (
        <div ref={containerRef} className="h-full">
            <Table
                rowKey="id"
                columns={columns}
                dataSource={data}
                scroll={{y: height}}
            />
        </div>
    );
});

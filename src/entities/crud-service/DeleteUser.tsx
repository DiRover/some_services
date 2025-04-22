/**
 * Created by ROVENSKIY D.A. on 22.04.2025
 */
import {memo, useCallback} from 'react';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';
import {DeleteOutlined} from '@ant-design/icons';
import {Modal} from 'antd';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import API from '@libs/API.ts';
import {useSetAtom} from 'jotai/index';
import {atomUserList} from '../../atoms/atomUser.ts';
import {useNavigate} from 'react-router';

interface DeleteUserProps {
    id: string;
}

const DeleteUser = memo<DeleteUserProps>(({id}) => {
    const deleteUserFromList = useSetAtom(atomUserList);

    const navigate = useNavigate();

    const commonFunction = useCallback(() => {
        deleteUserFromList(id);
        navigate('../../../crud');
    }, [deleteUserFromList, id, navigate]);

    const {mutate} = useMutation({
        mutationFn: () => axios.delete(API.users(id)),
        onError: () => {
            commonFunction();
        },
        onSuccess: () => {
            commonFunction();
        },
    });

    const onClick = useCallback(() => {
        Modal.confirm({
            onOk() {
                mutate();
            },
            title: 'Do you realy want to delete this user?',
        });
    }, [mutate]);

    return (
        <SpinningFrame>
            <DeleteOutlined onClick={onClick} />
        </SpinningFrame>
    );
});

export default DeleteUser;

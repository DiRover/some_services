/**
 * Created by ROVENSKIY D.A. on 14.04.2025
 */
import {memo, useContext} from 'react';
import ViewInfoLine from './view/ViewInfoLine.tsx';
import {AddressView} from '@components/view/AddressView.tsx';
import {UserOutlined} from '@ant-design/icons';
import ButtonBack from '@components/ButtonBack.tsx';
import {Image} from 'antd';
import {ContextUser} from './ContextUser.ts';
import {Link} from 'react-router';
import SpinningFrame from '@components/view/dialog-frame/SpinningFrame.tsx';
import DeleteUser from './DeleteUser.tsx';

export const Component = memo(() => {
    const user = useContext(ContextUser);

    if (!user) return null;

    return (
        <div className="grid w-2/3 grid-cols-[1fr_2fr] gap-y-4 rounded-2xl border p-8 text-fuchsia-500">
            <div className="col-span-2 flex w-full justify-between">
                <ButtonBack />

                <SpinningFrame>
                    <Link to="edit-user">Edit</Link>
                </SpinningFrame>

                <DeleteUser id={user.id} />
            </div>

            <div className="row-span-2 self-center justify-self-center">
                {user.image ? (
                    <Image src={user.image} alt="user photo" />
                ) : (
                    <UserOutlined className="text-9xl" />
                )}
            </div>

            <div className="flex flex-col">
                <h2 className="self-center text-xl">Personal info</h2>

                <div className="grid divide-y divide-fuchsia-500">
                    <ViewInfoLine title="First name" value={user.firstName} />

                    <ViewInfoLine title="Middle name" value={user.maidenName} />

                    <ViewInfoLine
                        title="Last name"
                        value={user.lastName}
                        isLastLine
                    />
                </div>
            </div>

            <div className="flex flex-col">
                <h2 className="self-center text-xl">Contact info</h2>

                <div className="grid divide-y divide-fuchsia-500">
                    <ViewInfoLine title="Phone" value={user.phone} />

                    <ViewInfoLine title="Email" value={user.email} isLastLine />
                </div>
            </div>

            <div className="col-span-2 flex flex-col">
                <h2 className="self-center text-xl">Job info</h2>

                <div className="grid divide-y divide-fuchsia-500">
                    <ViewInfoLine
                        title="Company name"
                        value={user.company?.name}
                    />

                    <ViewInfoLine
                        title="Company address"
                        value={user.company?.address.city}
                    />
                    <div>
                        <p>Company address:</p>
                        <AddressView address={user.company?.address} isInline />
                    </div>
                </div>
            </div>
        </div>
    );
});

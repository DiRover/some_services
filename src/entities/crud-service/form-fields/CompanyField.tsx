/**
 * Created by ROVENSKIY D.A. on 17.04.2025
 */

import {memo} from 'react';
import {Form, Input} from 'antd';

const {Item} = Form;

const CompanyField = memo(() => {
    return (
        <>
            <Item label="Company" name={['company', 'name']}>
                <Input placeholder="Company name" />
            </Item>

            <p className="text-everywhere-color text-2xl">Company address</p>

            <div className="flex gap-x-4">
                <Item label="State" name={['company', 'address', 'state']}>
                    <Input placeholder="State" />
                </Item>

                <Item
                    label="State code"
                    name={['company', 'address', 'stateCode']}
                >
                    <Input placeholder="State code" />
                </Item>

                <Item label="City" name={['company', 'address', 'city']}>
                    <Input placeholder="City" />
                </Item>
            </div>
        </>
    );
});

export default CompanyField;

/**
 * Created by ROVENSKIY D.A. on 26.03.2025
 */
import {Spin} from 'antd';
import {memo} from 'react';
import {LoadingOutlined} from '@ant-design/icons';

const LoadingIndicator = memo(() => {
    return (
        <Spin fullscreen size="large" indicator={<LoadingOutlined spin />} />
    );
});

export default LoadingIndicator;

/**
 * Created by ROVENSKIY D.A. on 18.03.2025
 */
import {memo, useCallback} from 'react';
import {useNavigate} from 'react-router';

const ErrorPage = memo(() => {
    const navigate = useNavigate();

    const goBack = useCallback(() => {
        navigate(-1);
    }, []);
    return (
        <div className="flex h-screen items-center justify-center bg-black text-white">
            <div className="grid auto-cols-max grid-flow-col divide-x divide-gray-100">
                <p className="justify-self-end p-4">Error</p>
                <div className="flex gap-x-1 p-4">
                    <p>Oh no, this error page, but you can go</p>
                    <button
                        className="cursor-pointer underline"
                        onClick={goBack}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
});

export default ErrorPage;

/**
 * Created by ROVENSKIY D.A. on 11.03.2025
 */
import {memo} from 'react';
import {servicesList} from './services.tsx';
import ServiceView from './ServiceView.tsx';

export const Component = memo(() => {
    return (
        <div className="grid grid-cols-3 gap-4 place-self-center">
            {servicesList.map(service => (
                <ServiceView
                    service={service}
                    key={service.link || service.title}
                />
            ))}
        </div>
    );
});

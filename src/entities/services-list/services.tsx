import type {Service} from './types.ts';

export const servicesList: Service[] = [
    {
        description: (
            <>
                <p>
                    This is a CRUD service — you can create, view, edit, and
                    delete users here.
                </p>
                <p>
                    On the initial render, the app makes an API call to fetch a
                    list of three users.
                </p>
                <p>
                    To create a new user, click the Add user button in the top
                    right corner.
                </p>
                <p>
                    To view a user’s profile, click on a row in the table to
                    navigate to the corresponding page.
                </p>
                <p>
                    To view a user’s profile, click on a row in the table to
                    navigate to the corresponding page.
                </p>
                <p>
                    After deleting all users, a request will be made again to
                    fetch the same three users.
                </p>
            </>
        ),
        link: 'crud',
        title: 'CRUD',
    },
    {
        description: 'The service is under development.',
        title: 'Map',
    },
    {
        description: 'The service is under development.',
        title: 'Diagrams',
    },
];

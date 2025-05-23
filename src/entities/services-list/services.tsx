import type {Service} from './types.ts';

export const servicesList: Service[] = [
    {
        description: (
            <ul className="list-disc">
                <li>
                    This is a CRUD service — you can create, view, edit, and
                    delete users here.
                </li>
                <li>
                    On the initial render, the app makes an API call to fetch a
                    list of three users.
                </li>
                <li>
                    To create a new user, click the Add user button in the top
                    right corner.
                </li>
                <li>
                    To view a user’s profile, click on a row in the table to
                    navigate to the corresponding page.
                </li>
                <li>
                    To view a user’s profile, click on a row in the table to
                    navigate to the corresponding page.
                </li>
                <li>
                    After deleting all users, a request will be made again to
                    fetch the same three users.
                </li>
            </ul>
        ),
        link: 'crud',
        title: 'CRUD',
    },
    {
        description: (
            <ul className="list-disc">
                <li>Interaction with AI.</li>
                <li>The DeepSeek V3 AI model is used.</li>
            </ul>
        ),
        link: 'chat',
        title: 'Chat with AI',
    },
    {
        description: 'The service is under development.',
        title: 'Map',
    },
];

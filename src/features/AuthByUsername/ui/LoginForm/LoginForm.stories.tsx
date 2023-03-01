import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'Features/AuthByUserName/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
};

Default.decorators = [
    StoreDecorator({
        login: {
            username: '123',
            password: '12345',
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.parameters = {
    theme: Theme.DARK,
};

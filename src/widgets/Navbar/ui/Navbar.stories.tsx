import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator';
import Navbar from './Navbar';

export default {
    title: 'Widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.parameters = {
    theme: Theme.DARK,
};

export const AuthLight = Template.bind({});
AuthLight.args = {};
AuthLight.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'aaa',
            },
        },
    }),
];

export const AuthDark = Template.bind({});
AuthDark.args = {};

AuthDark.parameters = {
    theme: Theme.DARK,
};
AuthDark.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'aaa',
            },
        },
    }),
];

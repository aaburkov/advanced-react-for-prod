import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator';
import UserPage from './UserPage';

import avatarImg from '../../../shared/assets/test/avatar.jpeg';

export default {
    title: 'Pages/UserPage',
    component: UserPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    id: '1',
                    username: 'admin',
                    name: 'name',
                    surname: 'surname',
                    age: 55,
                    country: Countries.Armenia,
                    currency: Currency.EUR,
                    avatar: avatarImg,
                },
            },
        }),
    ],
    args: {
    },
} as ComponentMeta<typeof UserPage>;

const Template: ComponentStory<typeof UserPage> = (args) => <UserPage {...args} />;

export const Default = Template.bind({});
export const DefaultDark = Template.bind({});
DefaultDark.parameters = {
    theme: Theme.DARK,
};
export const DefaultOrange = Template.bind({});
DefaultOrange.parameters = {
    theme: Theme.ORANGE,
};

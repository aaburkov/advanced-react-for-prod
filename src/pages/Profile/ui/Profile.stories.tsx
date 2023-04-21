import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator';
import Profile from './Profile';

import avatarImg from '../../../shared/assets/test/avatar.jpeg';

export default {
    title: 'Pages/Profile',
    component: Profile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            profile: {
                form: {
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
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
export const DefaultDark = Template.bind({});
DefaultDark.parameters = {
    theme: Theme.DARK,
};
export const DefaultOrange = Template.bind({});
DefaultOrange.parameters = {
    theme: Theme.ORANGE,
};

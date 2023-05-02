import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Theme } from 'app/providers/ThemeProvider';
import ProfileCard from './ProfileCard';

import avatarImg from '../../../../shared/assets/test/avatar.jpeg';

export default {
    title: 'Entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
    ],
    args: {
        data: {
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
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
export const DefaultDark = Template.bind({});
DefaultDark.parameters = {
    theme: Theme.DARK,
};
export const DefaultOrange = Template.bind({});
DefaultOrange.parameters = {
    theme: Theme.ORANGE,
};

export const Error = Template.bind({});
Error.args = {
    error: 'Some error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

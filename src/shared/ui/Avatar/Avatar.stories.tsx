import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './Avatar';
import image from './storybook_mock.jpeg';

export default {
    title: 'Shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: image,
};

export const Small = Template.bind({});
Small.args = {
    src: image,
    size: 50,
};

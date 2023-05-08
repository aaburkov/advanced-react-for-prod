import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import Card from './Card';

export default {
    title: 'Shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Some content ...',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Some content ...',
};
Dark.parameters = {
    theme: Theme.DARK,
};

export const Orange = Template.bind({});
Orange.args = {
    children: 'Some content ...',
};
Orange.parameters = {
    theme: Theme.ORANGE,
};

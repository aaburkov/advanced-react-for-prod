import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import StripesLoader from './StripesLoader';

export default {
    title: 'Shared/Loaders/StripesLoader',
    component: StripesLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'App Link',
    },
} as ComponentMeta<typeof StripesLoader>;

const Template: ComponentStory<typeof StripesLoader> = (args) => <StripesLoader {...args} />;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.parameters = {
    theme: Theme.DARK,
};

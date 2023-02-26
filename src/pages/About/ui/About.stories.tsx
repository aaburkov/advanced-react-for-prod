import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import About from './About';

export default {
    title: 'Pages/About',
    component: About,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = {
    theme: Theme.DARK,
};

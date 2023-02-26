import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import Main from './Main';

export default {
    title: 'Pages/Main',
    component: Main,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = {
    theme: Theme.DARK,
};

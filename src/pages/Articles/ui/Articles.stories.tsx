import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import Articles from './Articles';

export default {
    title: 'Pages/Articles',
    component: Articles,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = (args) => <Articles {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = {
    theme: Theme.DARK,
};

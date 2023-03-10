import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';

export default {
    title: 'Widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.parameters = {
    theme: Theme.DARK,
};

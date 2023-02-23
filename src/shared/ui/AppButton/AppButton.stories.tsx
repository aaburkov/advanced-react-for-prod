import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AppButton, { AppButtonTheme } from './AppButton';

export default {
    title: 'Shared/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    theme: AppButtonTheme.DEFAULT,
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    theme: AppButtonTheme.CLEAR,
    children: 'Button',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: AppButtonTheme.CLEAR,
    children: 'Button',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    theme: AppButtonTheme.OUTLINE,
    children: 'Button',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: AppButtonTheme.OUTLINE,
    children: 'Button',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

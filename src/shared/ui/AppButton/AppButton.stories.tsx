import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import AppButton, { AppButtonSize, AppButtonTheme } from './AppButton';

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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    theme: AppButtonTheme.CLEAR_INVERTED,
    children: 'Button',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: AppButtonTheme.CLEAR,
    children: 'Button',
};
ClearDark.parameters = {
    theme: Theme.DARK,
};

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
OutlineDark.parameters = {
    theme: Theme.DARK,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    theme: AppButtonTheme.BACKGROUND,
    children: 'Button',
};

export const InvertedBackgroundTheme = Template.bind({});
InvertedBackgroundTheme.args = {
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    children: 'Button',
};

export const Square = Template.bind({});
Square.args = {
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: '>',
};

export const SquareWithSizes = Template.bind({});
SquareWithSizes.args = {
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: AppButtonSize.L,
    children: '<',
};

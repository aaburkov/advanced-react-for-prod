import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextSize, TextTheme } from './Text';

export default {
    title: 'Shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title Title',
    text: 'Text text text text. Text text text text',
};

export const PrimaryL = Template.bind({});
PrimaryL.args = {
    title: 'Title Title',
    text: 'Text text text text. Text text text text',
    size: TextSize.L,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text text text text. Text text text text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title Title',
    text: 'Text text text text. Text text text text',
};
PrimaryDark.parameters = {
    theme: Theme.DARK,
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title Title',
};
OnlyTitleDark.parameters = {
    theme: Theme.DARK,
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text text text text. Text text text text',
};
OnlyTextDark.parameters = {
    theme: Theme.DARK,
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title Title',
    text: 'Text text text text. Text text text text',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title Title',
    text: 'Text text text text. Text text text text',
    theme: TextTheme.ERROR,
};
ErrorDark.parameters = {
    theme: Theme.DARK,
};

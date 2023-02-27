import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import CodeInput from './CodeInput';

export default {
    title: 'Shared/CodeInput',
    component: CodeInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CodeInput>;

const Template: ComponentStory<typeof CodeInput> = (args) => <CodeInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Enter text',
    value: '123',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Enter text',
    value: '123',
};
Dark.parameters = {
    theme: Theme.DARK,
};

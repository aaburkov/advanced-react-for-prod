import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import CheckboxGroup from './CheckboxGroup';

export default {
    title: 'Shared/CheckboxGroup',
    component: CheckboxGroup,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        items: [
            {
                value: '1',
                content: 'First',
            },
            {
                value: '2',
                content: 'Second',
            },
            {
                value: '3',
                content: 'Third',
            },
        ],
        value: [
            '2',
        ],
    },
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args} />;

export const Default = Template.bind({});
export const Disable = Template.bind({});
Disable.args = {
    readOnly: true,
};
export const Dark = Template.bind({});
Dark.parameters = {
    theme: Theme.DARK,
};
export const Orange = Template.bind({});
Orange.parameters = {
    theme: Theme.ORANGE,
};

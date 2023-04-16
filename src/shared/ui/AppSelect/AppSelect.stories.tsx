import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppSelect from './AppSelect';

export default {
    title: 'Shared/AppSelect',
    component: AppSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
    },
} as ComponentMeta<typeof AppSelect>;

const Template: ComponentStory<typeof AppSelect> = (args) => <AppSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Select value',
    options: [
        { value: '123' },
        { value: '1234', content: 'test' },
        { value: '1235' },
    ],
};

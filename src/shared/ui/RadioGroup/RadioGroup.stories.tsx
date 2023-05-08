import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioGroup from './RadioGroup';

export default {
    title: 'Shared/RadioGroup',
    component: RadioGroup,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        {
            value: '1',
            content: 'First Item',
        },
        {
            value: '2',
            content: 'Second Item',
        },
        {
            value: '3',
            content: 'Third Item',
        },
    ],
    value: '2',
};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import CurrencySelect from './CurrencySelect';

export default {
    title: 'Entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
};

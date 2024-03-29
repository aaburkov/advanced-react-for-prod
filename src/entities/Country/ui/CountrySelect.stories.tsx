import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountrySelect from './CountrySelect';

export default {
    title: 'Entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
};

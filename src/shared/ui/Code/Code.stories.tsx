import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import Code from './Code';

export default {
    title: 'Shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        text: `export default {
    title: 'Shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.args = {
};
`,
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.args = {
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = {
    theme: Theme.DARK,
};

export const Orange = Template.bind({});
Orange.args = {};
Orange.parameters = {
    theme: Theme.ORANGE,
};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import Skeleton from './Skeleton';

export default {
    title: 'Shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
};
export const Circle = Template.bind({});
Circle.args = {
    width: 150,
    height: 150,
    borderRadius: '50%',
};

export const CircleDark = Template.bind({});
CircleDark.args = {
    width: 150,
    height: 150,
    borderRadius: '50%',
};
CircleDark.parameters = {
    theme: Theme.DARK,
};

export const CircleOrange = Template.bind({});
CircleOrange.args = {
    width: 150,
    height: 150,
    borderRadius: '50%',
};
CircleOrange.parameters = {
    theme: Theme.ORANGE,
};

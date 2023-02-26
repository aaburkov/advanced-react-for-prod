import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';

export default {
    title: 'Pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.parameters = {
    theme: Theme.DARK,
};

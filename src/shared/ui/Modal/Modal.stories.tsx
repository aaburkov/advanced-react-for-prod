import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import Modal from './Modal';

export default {
    title: 'Shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    children: <h1>I`am a modal window</h1>,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: <h1>I`am a modal window</h1>,
};
Dark.parameters = {
    theme: Theme.DARK,
};

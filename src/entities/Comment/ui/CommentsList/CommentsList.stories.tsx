import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentsList from './CommentsList';

export default {
    title: 'Entities/CommentsList',
    component: CommentsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
    ],
    args: {
    },
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />;

export const Default = Template.bind({});

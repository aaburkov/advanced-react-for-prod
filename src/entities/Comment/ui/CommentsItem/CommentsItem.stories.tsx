import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentsItem from './CommentsItem';

export default {
    title: 'Entities/CommentsItem',
    component: CommentsItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
    ],
    args: {
    },
} as ComponentMeta<typeof CommentsItem>;

const Template: ComponentStory<typeof CommentsItem> = (args) => <CommentsItem {...args} />;

export const Default = Template.bind({});

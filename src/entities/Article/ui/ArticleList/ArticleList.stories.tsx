import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleViewType } from 'entities/Article/model/types/article';
import ArticleList from './ArticleList';

export default {
    title: 'Entities/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
    ],
    args: {
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const GridLoading = Template.bind({});
GridLoading.args = {
    isLoading: true,
    viewType: ArticleViewType.GRID,
};

export const ListLoading = Template.bind({});
ListLoading.args = {
    isLoading: true,
    viewType: ArticleViewType.LIST,
};

import { User } from 'entities/User';

export enum ArticleBlockTypes {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string
    type: ArticleBlockTypes
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockTypes.TEXT
    title?: string
    paragraphs: string[]
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockTypes.CODE
    code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockTypes.IMAGE
    title: string
    src: string
}

export enum ArticleTags {
    IT = 'IT',
    NEWS = 'NEWS',
    SCIENCE = 'SCIENCE',
    ECONOMIC = 'ECONOMIC',
    FUN = 'FUN'
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export interface Article {
    id: string,
    user: User,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    tags: ArticleTags[],
    blocks: ArticleBlock[]
}

export enum ArticleViewType {
    GRID = 'GRID',
    LIST = 'LIST',
}

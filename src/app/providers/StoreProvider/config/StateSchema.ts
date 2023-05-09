import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetails';
import { CommentFormSchema } from 'features/CommentForm/model/types/commentFormSchema';
import { ArticlesPageSchema } from 'pages/Articles/model/types/ArticlesPageSchema';
import { ScrollSchema } from 'widgets/PageContainer/model/types/scroll';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    pageScroll: ScrollSchema,

    // Async reducers
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articlesPage?: ArticlesPageSchema,
    articlesDetails?: ArticleDetailsSchema,
    articleDetailsComments?: ArticleDetailsCommentsSchema,
    commentForm?: CommentFormSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>
    add: (key:StateSchemaKey, reducer:Reducer) => void,
    remove: (key:StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager:ReducerManager
}

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}
export type ReducersListEntry = [StateSchemaKey, Reducer]

export interface ThunkExtraArg {
    $api: AxiosInstance
}

export interface ThunkConfig<E> {
    rejectValue: E,
    extra: ThunkExtraArg,
    state: StateSchema
}

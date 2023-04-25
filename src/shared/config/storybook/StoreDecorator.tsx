/* eslint-disable react/display-name */
import { Story } from '@storybook/react';
import { ReducersList, StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/ArticleDetailSlice';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers:ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articlesDetails: articleDetailsReducer,
};

export default (
    state?: DeepPartial<StateSchema>,
    asyncReducers?:ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{
            ...defaultAsyncReducers,
            ...asyncReducers,
        }}
    >
        <StoryComponent />
    </StoreProvider>
);

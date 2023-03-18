/* eslint-disable react/display-name */
import { Story } from '@storybook/react';
import { ReducersList, StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { MemoryRouter } from 'react-router-dom';

const defaultAsyncReducers:ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export default (
    state?: DeepPartial<StateSchema>,
    asyncReducers?:ReducersList,
) => (StoryComponent: Story) => (
    <MemoryRouter initialEntries={['/']}>
        <StoreProvider
            initialState={state as StateSchema}
            asyncReducers={{
                ...defaultAsyncReducers,
                ...asyncReducers,
            }}
        >
            <StoryComponent />
        </StoreProvider>
    </MemoryRouter>
);

import { $api } from 'shared/api/api';
import {
    ReducersMapObject, configureStore, Reducer, CombinedState, Dispatch, Action,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { PageScrollReducer } from 'widgets/PageContainer';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

const storybookMiddleware = () => (next:Dispatch) => (action:Action) => {
    if (__PROJECT__ !== 'storybook') {
        next(action);
    }
};

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers as ReducersMapObject<StateSchema>,
        counter: counterReducer,
        user: userReducer,
        pageScroll: PageScrollReducer,
    };

    const reducerManager = createReducerManager(rootReducers);
    const store = configureStore({
        devTools: __IS_DEV__,
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    $api,
                },
            },
        }).concat(storybookMiddleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

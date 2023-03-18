import { $api } from 'shared/api/api';
import {
    ReducersMapObject, configureStore, AnyAction, Reducer, CombinedState,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { NavigateFunction } from 'react-router-dom';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>,
    navigate: NavigateFunction,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers as ReducersMapObject<StateSchema>,
        counter: counterReducer,
        user: userReducer,
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
                    navigate,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

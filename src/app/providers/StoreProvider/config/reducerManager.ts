import {
    ReducersMapObject, combineReducers, AnyAction, Reducer,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
):ReducerManager {
    // Create an object which maps keys to reducers
    const reducers = { ...initialReducers };

    // Create the initial combinedReducer
    let combinedReducer = combineReducers(reducers);

    // An array which is used to delete state keys when reducers are removed
    let keysToRemove:StateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state:StateSchema, action:AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key:StateSchemaKey, reducer:Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            // Add the reducer to the reducer mapping
            reducers[key] = reducer;

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },

        // Removes a reducer with the specified key
        remove: (key:StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            // Remove it from the reducer mapping
            delete reducers[key];

            // Add the key to the list of keys to clean up
            keysToRemove.push(key);

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },
    };
}

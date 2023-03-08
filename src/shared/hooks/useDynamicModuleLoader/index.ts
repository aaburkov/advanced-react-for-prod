import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from 'app/providers/StoreProvider/hooks';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

function useDynamicModuleLoader(key:StateSchemaKey, reducer: Reducer, removeAfterUnmount = true) {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        store.reducerManager.add(key, reducer);
        dispatch({ type: `@INIT ${key} reducer` });
        if (removeAfterUnmount) {
            return () => {
                store.reducerManager.remove(key);
                dispatch({ type: `@DESTROY ${key} reducer` });
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}

export default useDynamicModuleLoader;

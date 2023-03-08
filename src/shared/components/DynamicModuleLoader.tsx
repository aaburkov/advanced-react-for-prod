import {
    ReduxStoreWithManager,
    ReducersList,
    ReducersListEntry,
} from 'app/providers/StoreProvider';
import { useAppDispatch } from 'app/providers/StoreProvider/hooks';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
    reducers: ReducersList,
    removeAfterUnmount?:boolean
}
const DynamicModuleLoader:FC<PropsWithChildren<DynamicModuleLoaderProps>> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        (Object.entries(reducers) as ReducersListEntry[])
            .forEach(([name, reducer]:ReducersListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            });
        if (removeAfterUnmount) {
            return () => {
                (Object.entries(reducers) as ReducersListEntry[])
                    .forEach(([name]:ReducersListEntry) => {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    });
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};

export default DynamicModuleLoader;

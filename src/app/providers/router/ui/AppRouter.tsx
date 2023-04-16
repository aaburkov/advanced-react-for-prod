import { useAppSelector } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { truncate } from 'fs';
import { Suspense, memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { StripesLoader } from 'shared/ui/Loaders';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
    const isAuth = useAppSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (!isAuth && route.protected) {
            return false;
        }
        return true;
    }), [isAuth]);
    return (
        <Suspense fallback={<PageLoader loader={<StripesLoader />} />}>
            <Routes>
                {
                    routes.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                (
                                    <div className="page-wrapper">
                                        {element}
                                    </div>
                                )
                            }
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
}

export default memo(AppRouter);

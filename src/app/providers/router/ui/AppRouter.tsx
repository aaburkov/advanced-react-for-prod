import {
    Suspense, memo, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { StripesLoader } from 'shared/ui/Loaders';
import { PageLoader } from 'widgets/PageLoader';
import RequireAuth from './RequireAuth';

function AppRouter() {
    const renderWithWrapper = useCallback((route:AppRoutesProps) => {
        const element = (
            <div className="page-wrapper">
                {route.element}
            </div>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    (
                        <div className="page-wrapper">
                            {
                                route.protected ? (
                                    <RequireAuth>
                                        {element}
                                    </RequireAuth>
                                ) : element
                            }
                        </div>
                    )
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader loader={<StripesLoader />} />}>
            <Routes>
                {
                    Object.values(routeConfig).map(renderWithWrapper)
                }
            </Routes>
        </Suspense>
    );
}

export default memo(AppRouter);

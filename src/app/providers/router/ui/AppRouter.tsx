import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { StripesLoader } from 'shared/ui/Loaders';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
    return (
        <Suspense fallback={<PageLoader loader={<StripesLoader />} />}>
            <Routes>
                {
                    routeConfig.map(({ path, element }) => (
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

export default AppRouter;

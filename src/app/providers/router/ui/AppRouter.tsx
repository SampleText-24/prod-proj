import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routeConfig';
import { AppRouteProps } from '@/shared/types/router';

function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return (
        <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        // <Routes>
        //     {routes.map(({ element, path }) => (
        //         <Route
        //             key={path}
        //             path={path}
        //             element={(
        //                 <Suspense fallback={<PageLoader />}>
        //                     <div className="page-wrapper">
        //                         {element}
        //                     </div>
        //                 </Suspense>
        //             )}
        //         />
        //     ))}
        // </Routes>
    );
}

export default memo(AppRouter);

import { Spin } from 'antd';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './config/routesConfig';

const AppRouter = () => (
    <Suspense fallback={<Spin />}>
        <Routes>
            {
                Object.values(routeConfig).map(({ path, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        Component={Component}
                    />
                ))
            }
        </Routes>
    </Suspense>
);

export default AppRouter;

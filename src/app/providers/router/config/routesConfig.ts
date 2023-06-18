import { RouteProps } from "react-router-dom";
import { ErrorPage } from "../../../../pages/Error";
import { TasksPage } from "../../../../pages/Tasks";
import { MainPage } from '../../../../pages/Main';
import { ExcelPage } from '../../../../pages/Excel';
import { AppRoutes, RoutePath } from '../../../../shared/config/route';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        Component: MainPage,
    },
    [AppRoutes.EXCEL]: {
        path: RoutePath[AppRoutes.EXCEL],
        Component: ExcelPage,
    },
    [AppRoutes.TASKS]: {
        path: RoutePath[AppRoutes.TASKS],
        Component: TasksPage,
    },
    [AppRoutes.ERROR]: {
        path: RoutePath[AppRoutes.ERROR],
        Component: ErrorPage,
    },
};
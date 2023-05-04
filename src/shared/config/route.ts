export enum AppRoutes {
    MAIN = 'main',
    TASKS = 'tasks',
    ERROR = 'error'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TASKS]: '/tasks',
    [AppRoutes.ERROR]: '/error',
};
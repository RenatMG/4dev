export enum AppRoutes {
    MAIN = 'main',
    EXCEL = 'excel',
    TASKS = 'tasks',
    ERROR = 'error'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.EXCEL]: '/excel',
    [AppRoutes.TASKS]: '/tasks',
    [AppRoutes.ERROR]: '/error',
};
import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage/>
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />
    }
]
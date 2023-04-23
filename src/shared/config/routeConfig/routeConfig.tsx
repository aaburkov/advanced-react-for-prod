import { AboutPage } from 'pages/About';
import ArticleDetails from 'pages/ArticleDetails/ui/ArticleDetails';
import { ArticlesPage } from 'pages/Articles';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/Profile';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    protected?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAIL = 'articles_detail',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAIL]: '/articles/:id',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: AppRoutesProps[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    {
        path: RoutePath[AppRoutes.PROFILE],
        element: <ProfilePage />,
        protected: true,
    },
    {
        path: RoutePath[AppRoutes.ARTICLES],
        element: <ArticlesPage />,
        protected: true,
    },
    {
        path: RoutePath[AppRoutes.ARTICLE_DETAIL],
        element: <ArticleDetails />,
        protected: true,
    },
    // last
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];

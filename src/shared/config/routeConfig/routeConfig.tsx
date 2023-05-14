import { AboutPage } from 'pages/About';
import ArticleDetails from 'pages/ArticleDetails/ui/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticleNewPage } from 'pages/ArticleNewPage';
import { ArticlesPage } from 'pages/Articles';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/Profile';
import { UserPage } from 'pages/User';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    protected?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    USER = 'user',
    ARTICLES = 'articles',
    ARTICLE_DETAIL = 'articles_detail',
    ARTICLE_CREATE = 'articles_create',
    ARTICLE_EDIT = 'articles_edit',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.USER]: '/user', // :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAIL]: '/articles', // :id
    [AppRoutes.ARTICLE_CREATE]: '/articles/create',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit', // :id
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
        path: `${RoutePath[AppRoutes.USER]}/:id`,
        element: <UserPage />,
        protected: true,
    },
    {
        path: RoutePath[AppRoutes.ARTICLES],
        element: <ArticlesPage />,
        protected: true,
    },
    {
        path: `${RoutePath[AppRoutes.ARTICLE_DETAIL]}/:id`,
        element: <ArticleDetails />,
        protected: true,
    },
    {
        path: `${RoutePath[AppRoutes.ARTICLE_CREATE]}`,
        element: <ArticleNewPage />,
        protected: true,
    },
    {
        path: `${RoutePath[AppRoutes.ARTICLE_EDIT]}`,
        element: <ArticleEditPage />,
        protected: true,
    },
    // last
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];

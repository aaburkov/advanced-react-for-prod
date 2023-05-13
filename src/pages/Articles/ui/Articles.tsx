import { ReducersList, useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
    ArticleList,
} from 'entities/Article';
import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';

import { PageContainer } from 'widgets/PageContainer';
import { useSearchParams } from 'react-router-dom';
import {
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageViewType,
} from '../model/selectors/articlesPage';
import { fetchArticles } from '../model/services/fetchArticles';
import { fetchMoreArticles } from '../model/services/fetchMoreArticles';
import {
    articlesPageReducer, getArticlesList,
} from '../model/slice/ArticlesPageSlice';
import ArticlesPageFilters from './ArticlesPageFilters/ArticlesPageFilters';
import { initArticles } from '../model/services/initArticles';

const initialReducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const Articles:FC = () => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const articles = useAppSelector(getArticlesList.selectAll);
    const viewType = useAppSelector(getArticlesPageViewType);
    const isLoading = useAppSelector(getArticlesPageIsLoading);

    useEffect(() => {
        dispatch(initArticles(searchParams));
    }, [dispatch]);

    const onScrollEnd = useCallback(() => {
        dispatch(fetchMoreArticles());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
            <PageContainer onScrollEnd={onScrollEnd} saveScroll>
                <h1>{t('Articles page')}</h1>
                <ArticlesPageFilters viewType={viewType} />
                <ArticleList
                    viewType={viewType}
                    articles={articles}
                    isLoading={isLoading}
                />
            </PageContainer>
        </DynamicModuleLoader>
    );
};

export default Articles;

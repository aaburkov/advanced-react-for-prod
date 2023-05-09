import { ReducersList, useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
    ArticleList, ArticleViewType,
} from 'entities/Article';
import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';
import {
    Icon, RadioGroup, RadioGroupSize,
} from 'shared/ui';
import GridIcon from 'shared/assets/icons/grid.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { PageContainer } from 'widgets/PageContainer';
import {
    articlesPageActions,
    articlesPageReducer, getArticlesList,
} from '../model/slice/ArticlesPageSlice';
import {
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageViewType,
} from '../model/selectors/articlesPage';
import { fetchArticles } from '../model/services/fetchArticles';
import { fetchMoreArticles } from '../model/services/fetchMoreArticles';

const initialReducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const Articles:FC = () => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();

    const articles = useAppSelector(getArticlesList.selectAll);
    const viewType = useAppSelector(getArticlesPageViewType);
    const isLoading = useAppSelector(getArticlesPageIsLoading);
    const inited = useAppSelector(getArticlesPageInited);

    useEffect(() => {
        if (!inited) {
            dispatch(fetchArticles());
        }
    }, [dispatch]);

    const onChangeViewType = useCallback((value: ArticleViewType) => {
        dispatch(articlesPageActions.setViewType(value));
    }, [dispatch]);

    const onScrollEnd = useCallback(() => {
        dispatch(fetchMoreArticles());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
            <PageContainer onScrollEnd={onScrollEnd} saveScroll>
                <h1>{t('Articles page')}</h1>
                <RadioGroup
                    onChange={onChangeViewType}
                    value={viewType}
                    size={RadioGroupSize.S}
                    items={[
                        {
                            value: ArticleViewType.GRID,
                            content: <Icon Svg={GridIcon} />,
                        },
                        {
                            value: ArticleViewType.LIST,
                            content: <Icon Svg={ListIcon} />,
                        },
                    ]}
                />
                {
                    articles && (
                        <ArticleList
                            viewType={viewType}
                            articles={articles}
                            isLoading={isLoading}
                        />
                    )
                }
            </PageContainer>
        </DynamicModuleLoader>
    );
};

export default Articles;

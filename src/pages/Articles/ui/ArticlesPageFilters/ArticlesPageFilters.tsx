import {
    FC, memo, useCallback, useMemo,
} from 'react';
import cn from 'shared/lib/classNames';
import { ArticleSortField, ArticleViewType } from 'entities/Article';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { articlesPageActions } from 'pages/Articles/model/slice/ArticlesPageSlice';
import {
    AppSelect, Card, CheckboxGroup, CheckboxItem, CodeInput, Icon, RadioGroup, RadioGroupSize,
} from 'shared/ui';
import GridIcon from 'shared/assets/icons/grid.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { useTranslation } from 'react-i18next';
import { SelectOption } from 'shared/ui/AppSelect/AppSelect';
import { SortOrder } from 'shared/types';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageTagsList,
} from 'pages/Articles/model/selectors/articlesPage';
import { fetchArticles } from 'pages/Articles/model/services/fetchArticles';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import { ArticleTags } from 'entities/Article/model/types/article';
import styles from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
   className?: string,
   viewType?: ArticleViewType
}
const ArticlesPageFilters:FC<ArticlesPageFiltersProps> = (props) => {
    const {
        className,
        viewType = ArticleViewType.LIST,
    } = props;
    const { t } = useTranslation('articles');
    const order = useAppSelector(getArticlesPageOrder);
    const search = useAppSelector(getArticlesPageSearch);
    const sort = useAppSelector(getArticlesPageSort);
    const tagsList = useAppSelector(getArticlesPageTagsList);

    const dispatch = useAppDispatch();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: SortOrder.ASC,
            content: t('ASC'),
        },
        {
            value: SortOrder.DESC,
            content: t('DESC'),
        },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ], [t]);

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.TITLE,
            content: t('Title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Views'),
        },
        {
            value: ArticleSortField.CREATED,
            content: t('Created at'),
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ], [t]);

    const tagsItems = useMemo<CheckboxItem<ArticleTags>[]>(() => [
        {
            value: ArticleTags.ECONOMIC,
            content: t('Economic'),
        },
        {
            value: ArticleTags.FUN,
            content: t('Entertaiment'),
        },
        {
            value: ArticleTags.IT,
            content: t('IT'),
        },
        {
            value: ArticleTags.NEWS,
            content: t('News'),
        },
        {
            value: ArticleTags.SCIENCE,
            content: t('Science'),
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ], [t]);

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({
            replace: true,
        }));
    }, [dispatch]);
    const debouncedFetch = useDebounce(fetchData, 500);
    const onChangeSort = useCallback((value: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(value));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((value: SortOrder) => {
        dispatch(articlesPageActions.setOrder(value));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((value: string) => {
        dispatch(articlesPageActions.setSearch(value));
        debouncedFetch();
    }, [debouncedFetch, dispatch]);

    const onChangeTagsList = useCallback((value: ArticleTags[]) => {
        dispatch(articlesPageActions.setTagsList(value));
        fetchData();
    }, [dispatch]);

    const onChangeViewType = useCallback((value: ArticleViewType) => {
        dispatch(articlesPageActions.setViewType(value));
    }, [dispatch]);

    return (
        <div className={cn(styles.ArticlesPageFilters, styles[viewType], className)}>
            <Card className={styles.sortAndViewType}>
                <div className={styles.sortWrapper}>
                    <AppSelect
                        onChange={onChangeSort}
                        label={t('Sort by')}
                        value={sort}
                        options={sortOptions}
                        className={styles.sortInput}
                    />
                    <AppSelect
                        onChange={onChangeOrder}
                        options={orderOptions}
                        value={order}
                    />
                </div>
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
            </Card>
            <Card className={styles.searchInput}>
                <CodeInput
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Search')}
                />
            </Card>
            <CheckboxGroup
                value={tagsList}
                items={tagsItems}
                onChange={onChangeTagsList}
            />
        </div>
    );
};

export default memo(ArticlesPageFilters);

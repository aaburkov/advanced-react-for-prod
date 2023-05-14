import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('articleDetails selectors', () => {
    it('get data', () => {
        const data = {
            id: 'aaa',
            title: 'bbb',
        };
        const state:DeepPartial<StateSchema> = {
            articlesDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    it('get error', () => {
        const data = {
            id: 'aaa',
            title: 'bbb',
        };
        const state:DeepPartial<StateSchema> = {
            articlesDetails: {
                data,
                isLoading: true,
                error: 'test string',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('test string');
    });

    it('get isLoading', () => {
        const data = {
            id: 'aaa',
            title: 'bbb',
        };
        const state:DeepPartial<StateSchema> = {
            articlesDetails: {
                data,
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    it('get isLoading empty state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesDetails: {},
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});

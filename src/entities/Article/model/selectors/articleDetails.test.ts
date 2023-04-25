import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetaildData, getArticleDetaildError, getArticleDetaildIsLoading } from './articleDetails';

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

        expect(getArticleDetaildData(state as StateSchema)).toEqual(data);
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

        expect(getArticleDetaildError(state as StateSchema)).toEqual('test string');
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

        expect(getArticleDetaildIsLoading(state as StateSchema)).toEqual(true);
    });

    it('get isLoading empty state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesDetails: {},
        };

        expect(getArticleDetaildIsLoading(state as StateSchema)).toEqual(false);
    });
});

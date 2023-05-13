import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    it('one param', () => {
        expect(getQueryParams({
            param1: 'test',
        })).toBe('?param1=test');
    });

    it('multiple params', () => {
        expect(getQueryParams({
            param1: 'test',
            param2: 'boop',
        })).toBe('?param1=test&param2=boop');
    });

    it('with undefined', () => {
        expect(getQueryParams({
            param1: undefined,
        })).toBe('?');
    });
});

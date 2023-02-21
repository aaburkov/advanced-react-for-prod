import cn from 'shared/lib/classNames';

describe('classNames', () => {
    test('success', () => {
        expect(cn('someClass')).toBe('someClass');
        expect(cn('someClass', undefined)).toBe('someClass');
        expect(cn('someClass', { someClassConditionally: true }))
            .toBe('someClass someClassConditionally');
        expect(
            cn(
                'someClass',
                { someClassConditionally: true },
                ['additional1', 'additional2'],
            ),
        ).toBe('someClass someClassConditionally additional1 additional2');
    });
    test('fault', () => {
        expect(cn('someClass') === '').toBe(false);
        expect(cn('someClass', undefined) === 'someClass undefined')
            .toBe(false);
        expect(
            cn(
                'someClass',
                { someClassConditionally: true },
            ) === 'someClass someClassConditionally true',
        ).toBe(false);
    });
});

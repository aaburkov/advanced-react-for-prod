import { Countries } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    name: 'aaa',
    surname: 'bbb',
    username: 'ccc',
    age: 22,
    country: Countries.Armenia,
};

describe('validateProfileData test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('wrong user data', async () => {
        const result = validateProfileData({
            name: 'xxxx',
            age: 222,
            country: Countries.Armenia,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('wrong user age', async () => {
        const result = validateProfileData({
            name: 'xxxx',
            surname: 'bbb',
            country: Countries.Armenia,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_AGE,
        ]);
    });

    test('wrong user country', async () => {
        const result = validateProfileData({
            name: 'xxxx',
            surname: 'bbb',
            age: 222,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });

    test('everything is wrong', async () => {
        const result = validateProfileData({
            name: 'xxxx',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
});

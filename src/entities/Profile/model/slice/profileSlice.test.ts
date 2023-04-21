import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { IProfile, ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';

describe('profile', () => {
    test('Set readonly', () => {
        const state:DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
        ).toEqual({ readonly: true });
    });
    test('Cancel edit', () => {
        const data: IProfile = {
            name: 'aaa',
            surname: 'bbb',
            username: 'ccc',
            age: 22,
            country: Countries.Armenia,
            city: 'Moscow',
            avatar: '',
            currency: Currency.EUR,
        };
        const state:DeepPartial<ProfileSchema> = {
            readonly: false,
            validateError: [
                ValidateProfileError.INCORRECT_USER_AGE,
            ],
            data,
            form: {
                name: 'vvv',
                surname: 'ooo',
            },
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            validateErrors: undefined,
            data,
            form: data,
            readonly: true,
        });
    });

    test('UpdateProfile', () => {
        const data: IProfile = {
            name: 'aaa',
            surname: 'bbb',
            username: 'ccc',
            age: 22,
            country: Countries.Armenia,
            city: 'Moscow',
            avatar: '',
            currency: Currency.EUR,
        };

        const state:DeepPartial<ProfileSchema> = {
            form: data,
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile({
                name: 'qqq',
                surname: 'lkkk',
                age: 33,
            })),
        ).toEqual({
            form: {
                ...data,
                name: 'qqq',
                surname: 'lkkk',
                age: 33,
            },
        });
    });

    test('UpdateProfile Pending', () => {
        const state:DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [],
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('UpdateProfile Fullfiled', () => {
        const data: IProfile = {
            name: 'aaa',
            surname: 'bbb',
            username: 'ccc',
            age: 22,
            country: Countries.Armenia,
            city: 'Moscow',
            avatar: '',
            currency: Currency.EUR,
        };

        const state:DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            readonly: true,
            data,
            form: data,
        });
    });
});

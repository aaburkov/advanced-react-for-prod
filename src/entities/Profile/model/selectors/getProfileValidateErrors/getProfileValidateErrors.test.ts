import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors', () => {
    it('getProfileValidateErrors', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORRECT_USER_AGE,
                    ValidateProfileError.INCORRECT_USER_COUNTRY,
                    ValidateProfileError.SERVER_ERROR,
                ],
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
});

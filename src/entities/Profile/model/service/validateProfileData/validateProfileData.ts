import { IProfile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: IProfile) => {
    if (!profile) {
        return [];
    }
    const {
        name, surname, age, country,
    } = profile;
    const errors: ValidateProfileError[] = [];

    if (!name || !surname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_USER_COUNTRY);
    }
    return errors;
};

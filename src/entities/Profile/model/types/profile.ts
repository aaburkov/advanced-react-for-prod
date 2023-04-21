import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
    name?: string,
    surname?: string,
    age?: number,
    country?: Countries,
    city?: string,
    username?: string,
    currency?: Currency,
    avatar?: string,
}

export interface ProfileSchema {
    data?: IProfile,
    form?: IProfile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateError?: ValidateProfileError[]
}

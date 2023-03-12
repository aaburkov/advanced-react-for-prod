import { Countries, Currency } from 'shared/const/common';

export interface IProfile {
    'name': string,
    'surname': string,
    'age': number,
    'country': Countries,
    'city': string,
    'username': string,
    'currency': Currency,
    'avatar': string,
}

export interface ProfileSchema {
    data?: IProfile,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}

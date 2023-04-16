import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';

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
    readonly: boolean
}

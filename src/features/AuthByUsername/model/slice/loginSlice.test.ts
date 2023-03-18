import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

describe('loginSlice', () => {
    test('Set username', () => {
        const state:DeepPartial<LoginSchema> = {
            username: '123',
        };

        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('12345')),
        ).toEqual({ username: '12345' });
    });
    test('Set password', () => {
        const state:DeepPartial<LoginSchema> = {
            password: '123',
        };

        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('12345')),
        ).toEqual({ password: '12345' });
    });
    test('Set isLoading', () => {
        const state:DeepPartial<LoginSchema> = {};

        expect(
            loginReducer(state as LoginSchema, loginByUserName.pending),
        ).toEqual({ isLoading: true, error: undefined });
    });
});

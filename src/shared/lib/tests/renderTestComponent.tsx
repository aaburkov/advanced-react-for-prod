import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18n-jest';

interface renderTestComponentOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}
export function renderTestComponent(
    component: ReactNode,
    options:renderTestComponentOptions = {},
) {
    const {
        route = '/',
        initialState,
    } = options;
    render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}

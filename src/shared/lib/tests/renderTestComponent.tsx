import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18n-jest';

interface renderTestComponentOptions {
    route?: string
}
export function renderTestComponent(
    component: ReactNode,
    options:renderTestComponentOptions = {},
) {
    const {
        route = '/',
    } = options;
    render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}

import { render, screen } from '@testing-library/react';
import AppButton, { AppButtonTheme } from './AppButton';

describe('AppButton', () => {
    it('Render', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    it('Theme class', () => {
        render(<AppButton theme={AppButtonTheme.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass(AppButtonTheme.CLEAR);
    });
});

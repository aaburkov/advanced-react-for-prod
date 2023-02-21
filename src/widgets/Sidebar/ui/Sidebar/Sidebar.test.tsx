import {
    renderWithTranslations,
} from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    it('Render', () => {
        renderWithTranslations(<Sidebar />);
    });
    it('Toggle Expand', () => {
        renderWithTranslations(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});

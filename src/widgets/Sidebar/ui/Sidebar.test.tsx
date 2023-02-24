import { fireEvent, screen } from '@testing-library/react';
import { renderTestComponent } from 'shared/lib/tests/renderTestComponent';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    it('Render', () => {
        renderTestComponent(<Sidebar />);
    });
    it('Toggle Expand', () => {
        renderTestComponent(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});

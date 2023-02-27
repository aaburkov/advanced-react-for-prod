import { render } from '@testing-library/react';
import CodeInput from './CodeInput';

describe('CodeInput', () => {
    it('Render', () => {
        render(<CodeInput />);
        // expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    it('Theme class', () => {
        render(<CodeInput />);
        // expect(screen.getByText('TEST')).toHaveClass(AppButtonTheme.CLEAR);
    });
});

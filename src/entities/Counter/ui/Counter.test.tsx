import { fireEvent, screen } from '@testing-library/react';
import { StateSchema } from 'app/providers/StoreProvider';
import { renderTestComponent } from 'shared/lib/tests/renderTestComponent';
import Counter from './Counter';

describe('Counter', () => {
    beforeEach(() => {
        const initialState: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        renderTestComponent(<Counter />, { initialState });
    });
    it('Render', () => {
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    it('Increment', () => {
        const btn = screen.getByTestId('increment-btn');
        fireEvent.click(btn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');

        fireEvent.click(btn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('12');

        fireEvent.click(btn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('13');
    });
    it('Decrement', () => {
        const btn = screen.getByTestId('decrement-btn');
        fireEvent.click(btn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');

        fireEvent.click(btn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('8');

        fireEvent.click(btn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('7');
    });
    it('Increment By Amount', () => {
        window.prompt = jest.fn().mockReturnValue('123');
        const btn = screen.getByTestId('increment-by-amount-btn');
        fireEvent.click(btn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('133');
    });
});

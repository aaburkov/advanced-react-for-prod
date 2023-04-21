/* eslint-disable react/display-name */
import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export default (StoryComponent: Story) => (
    <MemoryRouter initialEntries={['/']}>
        <div className="app">
            <StoryComponent />
        </div>
    </MemoryRouter>
);

/* eslint-disable react/display-name */
import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export default (StoryComponent: Story) => (
    <BrowserRouter>
        <div className="app">
            <StoryComponent />
        </div>
    </BrowserRouter>
);

/* eslint-disable react/display-name */
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export default (StoryComponent: Story) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);

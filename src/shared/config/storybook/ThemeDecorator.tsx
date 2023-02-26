/* eslint-disable react/display-name */
import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const ThemeDecorator:DecoratorFn = (StoryComponent, context) => {
    // eslint-disable-next-line react/destructuring-assignment
    const storyTheme = context.parameters.theme || context.globals.theme;

    return (
        <ThemeProvider initialTheme={storyTheme}>
            <StoryComponent />
        </ThemeProvider>
    );
};

export default ThemeDecorator;

import { addDecorator } from '@storybook/react';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator';
import I18nDecorator from '../../src/shared/config/storybook/I18nDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/index';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(I18nDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
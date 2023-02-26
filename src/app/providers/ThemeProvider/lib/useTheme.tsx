import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme, ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export const setBodyThemeClass = (themeClass: Theme) => {
    document.body.classList.remove(...Object.values(Theme));
    document.body.classList.add(themeClass);
};

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        setBodyThemeClass(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    const returnTheme = theme || Theme.LIGHT;

    return {
        theme: returnTheme,
        toggleTheme,
    };
}

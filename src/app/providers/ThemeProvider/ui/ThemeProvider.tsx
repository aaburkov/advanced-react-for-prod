import {
    FC, PropsWithChildren, useEffect, useMemo, useState,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme, ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme
}
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = (props) => {
    const {
        initialTheme,
        children,
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        document.body.classList.remove(...Object.values(Theme));
        document.body.classList.add(initialTheme || defaultTheme);
    }, []);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

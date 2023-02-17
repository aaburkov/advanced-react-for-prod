import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cn from 'shared/lib/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { AppButton, AppButtonTheme } from 'shared/ui';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            theme={AppButtonTheme.CLEAR}
            className={cn(styles.ThemeSwitcher, className)}
            onClick={toggleTheme}
        >
            { theme === Theme.DARK ? <LightIcon /> : <DarkIcon /> }
        </AppButton>
    );
}

export default ThemeSwitcher;

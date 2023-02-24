import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cn from 'shared/lib/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { AppButtonSize } from 'shared/ui/AppButton/AppButton';

interface ThemeSwitcherProps {
    className?: string;
}

function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            theme={AppButtonTheme.CLEAR}
            className={cn(className)}
            onClick={toggleTheme}
            square
            size={AppButtonSize.L}
        >
            { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </AppButton>
    );
}

export default ThemeSwitcher;

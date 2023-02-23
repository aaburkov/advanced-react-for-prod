import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { FC } from 'react';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}
const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <AppButton
            className={cn(styles.LangSwitcher, className)}
            onClick={toggle}
            theme={AppButtonTheme.CLEAR}
        >
            <strong>
                {i18n.language.substring(0, 2).toUpperCase()}
            </strong>
        </AppButton>
    );
};

export default LangSwitcher;

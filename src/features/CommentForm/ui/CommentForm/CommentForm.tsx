import { FC, Suspense, useCallback } from 'react';
import cn from 'shared/lib/classNames';
import Modal from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { StripesLoader } from 'shared/ui/Loaders';
import { AppButton, AppButtonTheme, CodeInput } from 'shared/ui';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';
import {
    commentFormActions,
    commentFormReducer,
} from 'features/CommentForm/model/slice/commentFormSlice';
import { ReducersList, useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
    getCommentFormErro,
    getCommentFormIsLoading,
    getCommentFormText,
} from 'features/CommentForm/model/selectors/getCommentForm/getCommentForm';
import { AppButtonSize } from 'shared/ui/AppButton/AppButton';
import styles from './CommentForm.module.scss';

interface CommentFormProps {
    className?: string
    onSendComment: () => void
}
const reducers: ReducersList = {
    commentForm: commentFormReducer,
};

export const CommentForm:FC<CommentFormProps> = (props) => {
    const {
        className,
        onSendComment,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const text = useAppSelector(getCommentFormText);
    const error = useAppSelector(getCommentFormErro);
    const isLoading = useAppSelector(getCommentFormIsLoading);

    const onChangeComment = (value: string) => {
        dispatch(commentFormActions.setText(value));
    };

    const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSendComment();
    }, [onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <form onSubmit={onSubmit}>
                <div className={cn(styles.CommentForm, className)}>
                    <CodeInput
                        value={text}
                        placeholder={t('Comment input placeholder')}
                        onChange={onChangeComment}
                        className={styles.input}
                    />
                    <AppButton
                        size={AppButtonSize.S}
                        theme={AppButtonTheme.OUTLINE}
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? <StripesLoader size={25} /> : t('Send')}
                    </AppButton>
                </div>
            </form>
        </DynamicModuleLoader>
    );
};

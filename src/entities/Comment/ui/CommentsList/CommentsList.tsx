import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui';
import { IComment } from '../../model/types/comment';
import styles from './CommentsList.module.scss';
import CommentsItem from '../CommentsItem/CommentsItem';

interface CommentsListProps {
   className?: string
   comments?: IComment[]
   isLoading?: boolean
}

const CommentsList:FC<CommentsListProps> = (props) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('comments');

    if (isLoading) {
        return (
            <div className={cn(styles.CommentsList, className)}>
                <CommentsItem isLoading className={styles.commentItem} />
                <CommentsItem isLoading className={styles.commentItem} />
                <CommentsItem isLoading className={styles.commentItem} />
            </div>
        );
    }
    return (
        <div className={cn(styles.CommentsList, className)}>
            {
                comments?.length ? (
                    comments.map((comment) => (
                        <CommentsItem
                            key={comment.id}
                            comment={comment}
                            className={styles.commentItem}
                        />
                    ))
                ) : (
                    <Text text={t('No comments yet')} />
                )
            }
        </div>
    );
};

export default CommentsList;

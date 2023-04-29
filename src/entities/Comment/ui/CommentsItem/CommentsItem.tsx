import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { Avatar, Skeleton, Text } from 'shared/ui';
import styles from './CommentsItem.module.scss';
import { IComment } from '../../model/types/comment';

interface CommentsItemProps {
   className?: string
   comment: IComment
   isLoading?: boolean
}

const CommentsItem:FC<CommentsItemProps> = (props) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={cn(styles.CommentsItem, className)}>
                <div className={styles.user}>
                    <Skeleton
                        borderRadius="50%"
                        width={30}
                        height={30}
                        className={styles.avatar}
                        style={{ marginBottom: 0 }}
                    />
                    <Skeleton width={300} height={25} style={{ marginBottom: 0 }} />
                </div>
                <Skeleton width="90%" height={20} />
                <Skeleton width="60%" height={20} />
                <Skeleton width="30%" height={20} />
            </div>
        );
    }
    return (
        <div className={cn(styles.CommentsItem, className)}>
            <div className={styles.user}>
                <Avatar size={30} src={comment.user.avatar} className={styles.avatar} />
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
};

export default CommentsItem;

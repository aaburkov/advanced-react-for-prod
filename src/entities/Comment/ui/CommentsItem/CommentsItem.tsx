import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { Avatar, Skeleton, Text } from 'shared/ui';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './CommentsItem.module.scss';
import { IComment } from '../../model/types/comment';

interface CommentsItemProps {
   className?: string
   comment?: IComment
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
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={cn(styles.CommentsItem, className)}>
            <Link to={`${RoutePath.user}/${comment.user.id}`} className={styles.user}>
                <Avatar size={30} src={comment.user.avatar} className={styles.avatar} />
                <Text title={comment.user.username} />
            </Link>
            <Text text={comment.text} />
        </div>
    );
};

export default CommentsItem;

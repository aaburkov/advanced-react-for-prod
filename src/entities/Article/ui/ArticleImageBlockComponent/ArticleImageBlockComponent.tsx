import { FC, memo } from 'react';
import cn from 'shared/lib/classNames';
import { Text, TextAlign } from 'shared/ui';
import styles from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
   className?: string
   block: ArticleImageBlock
}

const ArticleImageBlockComponent:FC<ArticleImageBlockComponentProps> = (props) => {
    const { className, block } = props;
    return (
        <div className={cn(styles.ArticleImageBlockComponent, className)}>
            <img src={block.src} alt={block.title} className={styles.img} />
            {
                block.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )
            }
        </div>
    );
};

export default memo(ArticleImageBlockComponent);

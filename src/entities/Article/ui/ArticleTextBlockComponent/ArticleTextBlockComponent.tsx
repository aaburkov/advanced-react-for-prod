import { FC, memo } from 'react';
import cn from 'shared/lib/classNames';
import { Text } from 'shared/ui';
import styles from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
   className?: string
   block: ArticleTextBlock
}

const ArticleTextBlockComponent:FC<ArticleTextBlockComponentProps> = (props) => {
    const { className, block } = props;
    return (
        <div className={cn(styles.ArticleTextBlockComponent, className)}>
            {
                block.title && (
                    <Text title={block.title} className={styles.title} />
                )
            }
            {
                block.paragraphs.map((par) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Text key={par} text={par} className={styles.paragraph} />
                ))
            }
        </div>
    );
};

export default memo(ArticleTextBlockComponent);

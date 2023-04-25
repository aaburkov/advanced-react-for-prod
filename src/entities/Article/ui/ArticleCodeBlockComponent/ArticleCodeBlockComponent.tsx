import { FC, memo } from 'react';
import cn from 'shared/lib/classNames';
import { Code } from 'shared/ui';
import styles from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
   className?: string
   block: ArticleCodeBlock
}

const ArticleCodeBlockComponent:FC<ArticleCodeBlockComponentProps> = (props) => {
    const { className, block } = props;
    return (
        <div className={cn(styles.ArticleCodeBlockComponent, className)}>
            <Code text={block.code} />
        </div>
    );
};

export default memo(ArticleCodeBlockComponent);

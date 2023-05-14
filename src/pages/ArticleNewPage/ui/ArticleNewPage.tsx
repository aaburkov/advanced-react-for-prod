/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer } from 'widgets/PageContainer';

const ArticleNewPage:FC = () => {
    const { t } = useTranslation();

    return (
        <PageContainer>
            <h1>ArticleNewPage</h1>
        </PageContainer>
    );
};

export default ArticleNewPage;

import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { Card } from '@/shared/ui/redesigned/Card';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss';
import { getRouteArticleEdit } from '@/shared/const/router';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData);

    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article?.id));
        }
    }, [article, navigate]);

    if (!article) return null;

    return (
        <Card className={cls.card} padding="24" border="round">
            <ArticleAdditionalInfo
                author={article.user}
                views={article.views}
                createdAt={article.createdAt}
                onEdit={onEditArticle}
            />
        </Card>
    );
});

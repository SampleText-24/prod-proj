import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
};

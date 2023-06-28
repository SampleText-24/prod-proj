import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticlesSortSelector } from '@/features/ArticlesSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import cls from './ArticlesPageFilters.module.scss';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hook/useArticleFilters';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = ({
    className,
}: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const {
        order,
        sort,
        onChangeSort,
        onChangeOrder,
        view,
        onChangeView,
        onChangeSearch,
        search,
        type,
        onChangeType,
    } = useArticleFilters();

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticlesSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs value={type} onChangeType={onChangeType} />
        </div>
    );
};

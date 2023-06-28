import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesFilters.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticlesSortSelector } from '@/features/ArticlesSortSelector';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField, ArticleType } from '@/entities/Article';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const { t } = useTranslation();
    const {
        className,
        sort,
        onChangeSort,
        onChangeSearch,
        onChangeType,
        search,
        onChangeOrder,
        order,
        type,
    } = props;

    return (
        <Card
            padding="24"
            className={classNames(cls.ArticlesFilters, {}, [className])}
        >
            <VStack gap="32">
                <Input
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                    value={search}
                />

                <ArticleTypeTabs value={type} onChangeType={onChangeType} />

                <ArticlesSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
});

import React, { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hook/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;

    const {
        order,
        sort,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        search,
        type,
        onChangeType,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            type={type}
            onChangeType={onChangeType}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            order={order}
            sort={sort}
            search={search}
            className={className}
        />
    );
});

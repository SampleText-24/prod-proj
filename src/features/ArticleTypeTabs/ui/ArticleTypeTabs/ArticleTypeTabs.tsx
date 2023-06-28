import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({
    className,
    value,
    onChangeType,
}: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    direction="column"
                    value={value}
                    tabs={typeTabs}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                />
            }
            off={
                <TabsDeprecated
                    value={value}
                    tabs={typeTabs}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                />
            }
        />
    );
};

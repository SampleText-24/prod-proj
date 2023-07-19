import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleListItemRedesigned.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleListItemProps } from '../ArticleListItem';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import {
    ArticleBlockType,
    ArticleView,
} from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import fallbackImg from '@/shared/assets/img/articleImg.png';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const userInfo = (
        <>
            <Avatar size={32} src={article.user.avatar} />
            <Text bold text={article.user.username} />
        </>
    );
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                max
                padding="24"
                border="round"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem"
            >
                <VStack max gap="16" align="start">
                    <HStack max gap="8">
                        {userInfo}
                        <Text text={article.createdAt} />
                    </HStack>

                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size="s" />

                    <AppImage
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                        fallback={<Skeleton width="100%" height={250} />}
                        errorFallback={
                            <AppImage className={cls.img} src={fallbackImg} />
                        }
                    />

                    {textBlock?.paragraphs && (
                        <Text
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                            className={cls.textBlock}
                        />
                    )}
                    <HStack max justify="between">
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant="outline">
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
            data-testid="ArticleListItem"
        >
            <Card padding="0" border="round" className={cls.card}>
                <AppImage
                    src={article.img}
                    alt={article.title}
                    className={cls.img}
                    fallback={<Skeleton height={260} />}
                    errorFallback={
                        <AppImage className={cls.img} src={fallbackImg} />
                    }
                />
                <VStack className={cls.info} align="start" gap="4">
                    <Text text={article.title} />
                    <VStack align="start" className={cls.footer} max gap="4">
                        <HStack justify="between">
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                            {views}
                        </HStack>
                        <HStack gap="4">{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});

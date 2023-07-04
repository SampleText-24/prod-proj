import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedSkeleton = () => (
    <Card padding="24" max>
        <VStack gap="32">
            <HStack justify="center" max>
                <Skeleton border="100%" width={128} height={128} />
            </HStack>
            <HStack gap="32" max>
                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </VStack>
                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </VStack>
            </HStack>
        </VStack>
    </Card>
);

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');
    return (
        <HStack max justify="center">
            <Text
                variant="error"
                title={t('Ошибочка вышла')}
                text={t('Попробуйте обновить страницу')}
                align="center"
            />
        </HStack>
    );
};

export const ProfileCardRedesigned = memo(
    ({
        className,
        data,
        onChangeFirstname,
        onChangeLastname,
        readonly,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    }: ProfileCardProps) => {
        const { t } = useTranslation('profile');
        return (
            <Card max padding="24" className={className}>
                <VStack gap="32">
                    {data?.avatar && (
                        <HStack justify="center" max>
                            <Avatar src={data?.avatar} size={128} />
                        </HStack>
                    )}
                    <HStack max gap="24">
                        <VStack align="center" max gap="16">
                            <Input
                                value={data?.firstname}
                                label={t('Имя')}
                                onChange={onChangeFirstname}
                                readonly={readonly}
                                data-testid="ProfileCard.firstname"
                            />
                            <Input
                                value={data?.lastname}
                                label={t('Фамилия')}
                                onChange={onChangeLastname}
                                readonly={readonly}
                                data-testid="ProfileCard.lastname"
                            />
                            <Input
                                value={data?.age}
                                label={t('Возраст')}
                                onChange={onChangeAge}
                                readonly={readonly}
                            />
                            <Input
                                value={data?.city}
                                label={t('Город')}
                                onChange={onChangeCity}
                                readonly={readonly}
                            />
                        </VStack>
                        <VStack align="start" max gap="16">
                            <Input
                                value={data?.username}
                                label={t('Ник')}
                                onChange={onChangeUsername}
                                readonly={readonly}
                            />
                            <Input
                                value={data?.avatar}
                                label={t('Ссылка на аватар')}
                                onChange={onChangeAvatar}
                                readonly={readonly}
                            />
                            <CurrencySelect
                                value={data?.currency}
                                onChange={onChangeCurrency}
                                readonly={readonly}
                            />
                            <CountrySelect
                                value={data?.country}
                                onChange={onChangeCountry}
                                readonly={readonly}
                            />
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
        );
    },
);

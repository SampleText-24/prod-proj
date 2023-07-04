import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';

interface CurrencySelectProps {
    className?: string;
    readonly?: boolean;
    value?: Currency;
    onChange?: (value: Currency) => void;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <ListBox
                        className={className}
                        value={value}
                        readonly={readonly}
                        items={options}
                        defaultValue={t('Ваша валюта')}
                        onChange={onChangeHandler}
                        label={t('Ваша валюта')}
                    />
                }
                off={
                    <ListBoxDeprecated
                        className={className}
                        value={value}
                        readonly={readonly}
                        items={options}
                        defaultValue={t('Ваша валюта')}
                        onChange={onChangeHandler}
                        label={t('Ваша валюта')}
                    />
                }
            />
        );
    },
);

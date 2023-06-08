import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpen } = useJsonSettings();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpen: true }));
        }
    }, [dispatch, isArticlesPageWasOpen]);

    const onClose = () => setIsOpen(false);

    const text = (
        <Text
            title={t('Добро пожаловать на страницу со статьями')}
            text={t(
                'Здесь вы сможете найти и прочитать моножество статей на разные темы',
            )}
        />
    );

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});

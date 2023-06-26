import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useState } from 'react';
import { Card } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useDetectDevice } from '@/shared/lib/hooks/useDetectDevice/useDetectDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    hasFeedback?: boolean;
    feedbackTitle?: string;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onCancel,
        onAccept,
        feedbackTitle,
        title,
        hasFeedback,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [starCount, setStarCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStar = useCallback(
        (selectedStarsCount: number) => {
            setStarCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starCount, feedback);
    }, [feedback, onAccept, starCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starCount);
    }, [onCancel, starCount]);

    useEffect(() => {
        setIsMobile(useDetectDevice);
    }, []);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card data-testid="RatingCard" max className={className}>
            <VStack align="center" gap="8">
                <Text title={starCount ? t('Спасибо за оценку') : title} />
                <StarRating
                    selectedStars={starCount}
                    size={40}
                    onSelect={onSelectStar}
                />
            </VStack>
            {isMobile ? (
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button
                                data-testid="RatingCard.Close"
                                onClick={cancelHandler}
                                theme={ButtonTheme.CLEAR}
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                data-testid="RatingCard.Send"
                                onClick={acceptHandler}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            ) : (
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack max gap="32">
                        {modalContent}
                        <Button
                            fullWidth
                            onClick={acceptHandler}
                            size={ButtonSize.L}
                        >
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            )}
        </Card>
    );
});

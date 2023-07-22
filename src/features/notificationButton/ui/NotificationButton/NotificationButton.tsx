import React, { memo, useCallback, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import cls from './NotificationButton.module.scss';
import { useDetectDevice } from '@/shared/lib/hooks/useDetectDevice/useDetectDevice';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

// function detectDevice() {
//     const isMobile = window.matchMedia;
//     if (!isMobile) return false;
//
//     const device = isMobile('(pointer:coarse)');
//     return device.matches;
// }

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated inverted Svg={NotificationIconDeprecated} />
                </ButtonDeprecated>
            }
        />
    );

    useEffect(() => {
        setIsMobile(useDetectDevice);
    }, []);

    return (
        <div className={cls.center}>
            {isMobile ? (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            trigger={trigger}
                            direction="bottom left"
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            trigger={trigger}
                            direction="bottom left"
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
            ) : (
                <>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </>
            )}
        </div>
    );
});

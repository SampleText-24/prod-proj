import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import UserIcon from '../../../assets/icons/user-32-32.svg';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

/**
 * @deprecated
 */
export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};

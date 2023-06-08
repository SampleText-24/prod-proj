import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    // eslint-disable-next-line no-unused-vars
    CLEAR = 'clear',
    // eslint-disable-next-line no-unused-vars
    CLEAR_INVERTED = 'clearInverted',
    // eslint-disable-next-line no-unused-vars
    OUTLINE = 'outline',
    // eslint-disable-next-line no-unused-vars
    BACKGROUND = 'background',
    // eslint-disable-next-line no-unused-vars
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    // eslint-disable-next-line no-unused-vars
    M = 'size_m',
    // eslint-disable-next-line no-unused-vars
    L = 'size_l',
    // eslint-disable-next-line no-unused-vars
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

/**
 * @deprecated
 */
export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});

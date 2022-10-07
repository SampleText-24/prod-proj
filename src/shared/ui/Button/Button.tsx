import { classNames } from 'shared/lib/classnames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    // eslint-disable-next-line no-unused-vars
    CLEAR = 'clear',
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
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={
                classNames(cls.Button, mods, [className])
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};

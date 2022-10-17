import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'normal',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = ({
    className, text, title, theme = TextTheme.NORMAL,
}: TextProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};

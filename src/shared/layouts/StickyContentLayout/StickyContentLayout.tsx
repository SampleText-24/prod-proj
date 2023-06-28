import React, { memo, ReactElement } from 'react';
import cls from './StickyContentLayout.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    right?: ReactElement;
    content: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, left, right, content } = props;

    return (
        <div className={classNames(cls.StickyContentLayout, {}, [className])}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
});

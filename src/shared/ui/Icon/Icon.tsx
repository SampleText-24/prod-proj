import { classNames } from 'shared/lib/classnames/classNames';
import React from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = ({ className, Svg }: IconProps) => (
    <Svg className={classNames(cls.Icon, {}, [className])} />
);

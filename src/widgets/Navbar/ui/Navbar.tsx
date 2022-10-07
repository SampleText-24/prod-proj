import React from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

// Компоненты без асинхронных чанков экспортитуются так
export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            /
        </div>
    </div>
);

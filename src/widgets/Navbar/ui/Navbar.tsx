import React from 'react';
import { classNames } from "shared/lib/classnames/classNames";
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

// Компоненты без асинхронных чанков экспортитуются так
export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};


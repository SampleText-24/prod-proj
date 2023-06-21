import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';

import MainIconDeprecated from '@/shared/assets/icons/home-20-20.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/articles-20-20.svg';

import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticlesIcon from '@/shared/assets/icons/article.svg';

import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                feature: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
            text: 'Главная страница',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                feature: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
            text: 'О сайте',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    feature: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    feature: 'isAppRedesigned',
                    on: () => ArticlesIcon,
                    off: () => ArticlesIconDeprecated,
                }),
                text: 'Список статей',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});

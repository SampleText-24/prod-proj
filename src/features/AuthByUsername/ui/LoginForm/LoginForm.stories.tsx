import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        loginForm: { username: 'nickname', password: 'password123' },
    }),
];

export const LightWithError = Template.bind({});
LightWithError.args = {};
LightWithError.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'nickname',
            password: 'password123',
            error: 'ERROR',
        },
    }),
];

export const LightLoading = Template.bind({});
LightLoading.args = {};
LightLoading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: 'nickname', password: 'password123' },
    }),
];

export const DarkWithError = Template.bind({});
DarkWithError.args = {};
DarkWithError.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'nickname',
            password: 'password123',
            error: 'ERROR',
        },
    }),
];

export const DarkLoading = Template.bind({});
DarkLoading.args = {};
DarkLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];

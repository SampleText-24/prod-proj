import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleType } from '@/entities/Article';

export default {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
    <ArticleTypeTabs {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const LightSelected = Template.bind({});
LightSelected.args = {
    value: ArticleType.IT,
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkSelected = Template.bind({});
DarkSelected.args = {
    value: ArticleType.IT,
};
DarkSelected.decorators = [ThemeDecorator(Theme.DARK)];

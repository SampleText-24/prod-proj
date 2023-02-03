import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticlesSortSelector } from './ArticlesSortSelector';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticleSelectors/ArticlesSortSelector',
    component: ArticlesSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesSortSelector>;

const Template: ComponentStory<typeof ArticlesSortSelector> = (args) => (
    <ArticlesSortSelector {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

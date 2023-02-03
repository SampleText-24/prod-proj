import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Light = Template.bind({});
Light.args = {
    comment: {
        id: '1',
        text: 'TEXT',
        user: { id: '1', username: 'Petya' },
    },
};

export const LightLoading = Template.bind({});
LightLoading.args = {
    comment: {
        id: '1',
        text: 'TEXT',
        user: { id: '1', username: 'Petya' },
    },
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        text: 'TEXT',
        user: { id: '1', username: 'Petya' },
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
    comment: {
        id: '1',
        text: 'TEXT',
        user: { id: '1', username: 'Petya' },
    },
    isLoading: true,
};
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];

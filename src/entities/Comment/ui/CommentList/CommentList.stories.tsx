import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

const comments = [
    {
        id: '1',
        text: 'TEXT',
        user: { id: '1', username: 'Petya' },
    },
    {
        id: '2',
        text: 'TEXT',
        user: { id: '2', username: 'John' },
    },
];

export const Normal = Template.bind({});
Normal.args = {
    comments,
};

export const NormalLoading = Template.bind({});
NormalLoading.args = {
    comments,
    isLoading: true,
};

export const NormalWithoutComments = Template.bind({});
NormalWithoutComments.args = {};

export const Dark = Template.bind({});
Dark.args = {
    comments,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
    comments,
    isLoading: true,
};
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithoutComments = Template.bind({});
DarkWithoutComments.args = {};
DarkWithoutComments.decorators = [ThemeDecorator(Theme.DARK)];

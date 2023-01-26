import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';

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

export const Normal = Template.bind({});
Normal.args = {
    comments: [
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
    ],
};

export const NormalLoading = Template.bind({});
NormalLoading.args = {
    comments: [
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
    ],
    isLoading: true,
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'TEXT',
        user: { id: '1', username: 'Petya' },
    },
};

export const NormalLoading = Template.bind({});
NormalLoading.args = {
    comment: {
        id: '1',
        text: 'TEXT',
        user: { id: '1', username: 'Petya' },
    },
    isLoading: true,
};
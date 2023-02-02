import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    item: {
        id: '1',
        title: 'title1',
        description: 'descr1',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    item: {
        id: '1',
        title: 'title1',
        description: 'descr1',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

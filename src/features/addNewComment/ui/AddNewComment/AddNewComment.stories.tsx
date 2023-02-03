import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddNewComment from './AddNewComment';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/AddNewComment',
    component: AddNewComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddNewComment>;

const Template: ComponentStory<typeof AddNewComment> = (args) => (
    <AddNewComment {...args} />
);

export const Light = Template.bind({});
Light.args = {
    onSendComment: action('onSendComment'),
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    onSendComment: action('onSendComment'),
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

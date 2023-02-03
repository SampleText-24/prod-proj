import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        user: {
            authData: {
                avatar: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        user: {
            authData: {
                avatar: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/storybook.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
    alt: 'avatar',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    size: 50,
    src: AvatarImg,
    alt: 'avatar',
};

export const InvertedPrimary = Template.bind({});
InvertedPrimary.args = {
    size: 150,
    src: AvatarImg,
    alt: 'avatar',
};
InvertedPrimary.decorators = [ThemeDecorator(Theme.DARK)];

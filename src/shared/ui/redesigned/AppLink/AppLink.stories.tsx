import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
    variant: 'primary',
};

export const Inverted = Template.bind({});
Inverted.args = {
    children: 'text',
    variant: 'primary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'text',
    variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
    children: 'text',
    variant: 'primary',
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

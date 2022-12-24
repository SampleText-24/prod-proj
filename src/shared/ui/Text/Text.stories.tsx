import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
    title: 'Title sample text',
    text: 'Text sample text',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title sample text',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text sample text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title sample text',
    text: 'Text sample text',
    theme: TextTheme.ERROR,
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title sample text',
    text: 'Text sample text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title sample text',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text sample text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title sample text',
    text: 'Text sample text',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title sample text',
    text: 'Text sample text',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title sample text',
    text: 'Text sample text',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title sample text',
    text: 'Text sample text',
    size: TextSize.S,
};

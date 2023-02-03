import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RatingCard } from './RatingCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Light = Template.bind({});
Light.args = {
    title: 'Title for rating',
};

export const LightWithFeedback = Template.bind({});
LightWithFeedback.args = {
    title: 'Click on star',
    hasFeedback: true,
    feedbackTitle: 'Feedback title',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title for rating',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithFeedback = Template.bind({});
DarkWithFeedback.args = {
    title: 'Click on star',
    hasFeedback: true,
    feedbackTitle: 'Feedback title',
};
DarkWithFeedback.decorators = [ThemeDecorator(Theme.DARK)];

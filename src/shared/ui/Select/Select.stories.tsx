import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Just Label',
    options: [
        { value: 'test case 1', content: 'Some content' },
        { value: 'test case 1', content: 'Some content 2' },
        { value: 'test case 1', content: 'Some content 3' },
    ],
};

export const InvertedPrimary = Template.bind({});
InvertedPrimary.args = {
    label: 'Just Label',
    options: [
        { value: 'test case 1', content: 'Some content' },
        { value: 'test case 1', content: 'Some content 2' },
        { value: 'test case 1', content: 'Some content 3' },
    ],
};
InvertedPrimary.decorators = [ThemeDecorator(Theme.DARK)];

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    value: 'sample',
    items: [
        {
            content: '123qwert',
            value: '1',
        },
        {
            content: '123qwert321',
            value: '2',
        },
        {
            content: '123qwert6342514312',
            value: '3',
        },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: 'sample',
    direction: 'top left',
    items: [
        {
            content: '123qwert',
            value: '1',
        },
        {
            content: '123qwert321',
            value: '2',
        },
        {
            content: '123qwert6342514312',
            value: '3',
        },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    value: 'sample',
    direction: 'top right',
    items: [
        {
            content: '123qwert',
            value: '1',
        },
        {
            content: '123qwert321',
            value: '2',
        },
        {
            content: '123qwert6342514312',
            value: '3',
        },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: 'sample',
    direction: 'bottom left',
    items: [
        {
            content: '123qwert',
            value: '1',
        },
        {
            content: '123qwert321',
            value: '2',
        },
        {
            content: '123qwert6342514312',
            value: '3',
        },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    value: 'sample',
    direction: 'bottom right',
    items: [
        {
            content: '123qwert',
            value: '1',
        },
        {
            content: '123qwert321',
            value: '2',
        },
        {
            content: '123qwert6342514312',
            value: '3',
        },
    ],
};

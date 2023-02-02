import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const data = {
    firstname: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'Sample Text',
    username: 'username',
    city: 'Default city',
    currency: Currency.USD,
    avatar: 'https://www.lahiguera.net/cinemania/actores/michael_cera/fotos/10903/michael_cera.jpg',
};

export const Light = Template.bind({});
Light.args = {
    data,
    readonly: true,
};

export const LightCanEdit = Template.bind({});
LightCanEdit.args = {
    data,
};

export const LightWithoutImg = Template.bind({});
LightWithoutImg.args = {
    data: { ...data, avatar: 'q' },
};

export const LightWithError = Template.bind({});
LightWithError.args = {
    error: 'Some test error',
};

export const LightLoading = Template.bind({});
LightLoading.args = {
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    data,
    readonly: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkCanEdit = Template.bind({});
DarkCanEdit.args = {
    data,
};
DarkCanEdit.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithError = Template.bind({});
DarkWithError.args = {
    error: 'Some test error',
};
DarkWithError.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
    isLoading: true,
};
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ExampleComponent, Props } from './ExampleComponent';

export default {
  title: 'ExampleComponent',
  component: ExampleComponent,
} as Meta;

const Template: Story<Props> = (args) => <ExampleComponent {...args} />;

export const ExampleComponentWithHelloText = Template.bind({});

ExampleComponentWithHelloText.args = {
  text: 'Hello',
};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Cell, ICellProps } from './Cell';

export default {
  title: 'Cell',
  component: Cell,
} as Meta;

const Template: Story<ICellProps> = (args) => (
  <div
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <Cell {...args} />
  </div>
);

export const UnresolvedCell = Template.bind({});

UnresolvedCell.args = {
  value: 5,
  is_resolved: false,
};

export const ResolvedCell = Template.bind({});

ResolvedCell.args = {
  value: 4,
  is_resolved: true,
};

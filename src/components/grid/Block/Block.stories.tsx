import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Block, block_mock, IBlockProps } from './Block';

export default {
  title: 'Block',
  component: Block,
} as Meta;

const Template: Story<IBlockProps> = (args) => (
  <div
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <Block {...args} />
  </div>
);

export const BlockBasic = Template.bind({});

BlockBasic.args = {
  block: block_mock,
};

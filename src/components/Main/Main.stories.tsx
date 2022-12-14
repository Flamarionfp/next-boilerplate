import React from 'react';
import { Story } from '@storybook/react';
import { Main } from './Main';

const Template: Story = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS, NextJS e Styled Components',
};

export default {
  title: 'components/Main',
  component: Main,
};

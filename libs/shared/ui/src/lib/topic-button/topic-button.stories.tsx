import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {  TopicButton  }  from './topic-button';

const Story: ComponentMeta<typeof TopicButton> = {
  component: TopicButton,
  title: 'TopicButton', 
};
export default Story;


const Template: ComponentStory< typeof TopicButton > = (args) => {
  return (
    <div className='bg-gray-100 p-20'>
      <TopicButton {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
}
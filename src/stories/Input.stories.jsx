import Input from "../components/Input"

export default {
 title: "Input",
 component: Input,
 argTypes: {
    size: {
      options: ['sm', 'md', "lg"],
      control: { type: 'radio' },
    },
  },
}

// creating a template



/* const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
  textColor: "white"
}
*/

const Template = args => <Input {...args} />

// Create a story

export const Text = Template.bind({})
// setting args

Text.args = {
  type: "text",
  size: "md",
  placeholder: "Enter text"
}
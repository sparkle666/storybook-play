import Button from "../components/Button"

export default {
 title: "Button",
 component: Button,
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

const Template = args => <Button {...args} />

// Create a story

export const Blue = Template.bind({})
// setting args
Blue.args = {
  backgroundColor: "Blue",
  label: "Click",
  size: "md",
  textColor: "white"
}

export const Red = Template.bind({})
// setting args
Red.args = {
  backgroundColor: "Red",
  label: "Click",
  size: "md",
  textColor: "white"
}

export const Green = Template.bind({})
// setting args
Green.args = {
  backgroundColor: "Green",
  label: "Click",
  size: "md",
  textColor: "white"
}

export const BlueSmall = Template.bind({})
// setting args
BlueSmall.args = {
  backgroundColor: "Blue",
  label: "Click",
  size: "sm",
  textColor: "white"
}
import MyButton from "@/components/ui/Button";

export default {
  title: "Example/Button",
  component: MyButton,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    borderRadius: { control: "number" },
    onClick: { action: "clicked" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @on-click="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  primary: true,
  disabled: true,
};
export const Loading = Template.bind({});
Loading.args = {
  label: "Loading",
  primary: true,
  loading: true,
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small Button",
};

import BaseLink from "@/components/ui/BaseLink";

export default {
  title: "Example/Link",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseLink },
  template: "<base-link/>",
});

export const Custom = Template.bind({});

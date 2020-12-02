import React from "react";

import { Button } from "../components/button/Button";

export default {
  title: "Components/Button",
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

const Template = (args) => {
  return (
    <div>
      <Button text="myButton" theme="dark" />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "MyButton",
};

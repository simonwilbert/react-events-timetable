import React from "react";
import { Story } from "@storybook/react";
import { Timetable, TimetableProps } from "../components/timetable";
import { createEvents } from "./eventHelpers";
import { createTags } from "./tagHelpers";

export default {
  title: "Timetable",
  component: Timetable,
  argTypes: {
    from: {
      control: "date",
    },
    to: {
      control: "date",
    },
  },
};

const events = createEvents(10);

const Template: Story<TimetableProps> = (args) => <Timetable {...args} />;

export const Default = Template.bind({});
Default.args = {
  from: new Date(),
  to: new Date(),
  tags: createTags(3),
  events,
  groupedBy: "LOCATIONTYPE",
};

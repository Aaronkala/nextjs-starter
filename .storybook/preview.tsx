import React, { useEffect } from "react";
import { StoryContext } from "@storybook/react";
import { StoryFn } from "@storybook/addons";

import { getTheme } from "../src/styles/getTheme";
import { ThemeProvider } from "styled-components";



export const parameters = {
  options: {
    showRoots: true,
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "power",
      items: ["light", "dark"],
    },
  },
};

const RtlProvider = (storyFn: StoryFn<JSX.Element>, context: StoryContext) => {
  const { direction } = context.globals;

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return storyFn();
};

export const decorators = [
  (storyFn, context) => (
    <ThemeProvider theme={getTheme(context.globals.theme)}>
      {storyFn()}
    </ThemeProvider>
  ),
  RtlProvider,
];

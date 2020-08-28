/// <reference path="types.d.ts" />

import { button } from "@storybook/addon-knobs";
import { useColorMode } from "@xstyled/styled-components";
import React from "react";
import {
  KNOBS_GROUPS, Theme,
  THEME_COLOR_MODES
} from "../../src";

import makeDecorator from './makeDecorator';





const Modes = () => {
  const [mode, set] = useColorMode();
  button(
    "Toggle dark mode",
    () =>
      set(
        mode === THEME_COLOR_MODES.dark
          ? THEME_COLOR_MODES.light
          : THEME_COLOR_MODES.dark
      ),
    KNOBS_GROUPS.modes
  );
  return null;
};


const decorator = (getStory, context) => {
  console.log('Theme decorator is active');
  return (
    <Theme>
      <>
        <Modes />
        {getStory(context)}
      </>
    </Theme>);
}


export default makeDecorator(decorator);

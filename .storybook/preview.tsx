import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, addParameters } from "@storybook/react";
import { themeDecorator, layoutDecorator } from './decorators';

addDecorator(withKnobs);
themeDecorator()
layoutDecorator();

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

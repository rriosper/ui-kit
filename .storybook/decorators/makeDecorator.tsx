import { addDecorator } from '@storybook/react';

const makeDecorator = (fn: (story, props: { parameters: any}) => JSX.Element) => () => {
    addDecorator((story, props) => fn(story, props));
}

export default makeDecorator;

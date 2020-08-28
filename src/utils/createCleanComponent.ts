import { omit } from 'ramda'
import { createElement } from 'react'

type UncleanComponentProps = {
  children: React.ReactNode;
  [key: string]: any;
};

// Function to create cleaned component witouth any invalid html property.
const createCleanComponent = (
  Component: React.FunctionComponent | string,
  propsToRemove: string[]
) => ({ children, ...props }: UncleanComponentProps) => {
  const filteredProps = omit(propsToRemove, props)
  return createElement(Component, filteredProps, children)
}

export default createCleanComponent

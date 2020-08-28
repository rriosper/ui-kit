// Enhance render with company theme
jest.mock("@testing-library/react", () => {
  // const React = jest.requireActual("react");
  // const Theme = jest.requireActual("../../src/theme");
  const { render, ...rest } = jest.requireActual("@testing-library/react");
  const enhanceRender = (Component, options) => {
    const enhancedComponent = Component;
    return render(enhancedComponent, options);
  };
  return {
    ...rest,
    render: enhanceRender,
  };
});

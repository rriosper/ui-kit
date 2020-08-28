const { resolve } = require("path");

const resolveSrc = (...x) => resolve(__dirname, "..", "src", ...x);
const storiesSrc = resolve(__dirname, "..", "stories", "**", "*.stories.tsx");

module.exports = {
  stories: [storiesSrc],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "#components": resolveSrc("components"),
      "#constants": resolveSrc("constants"),
      "#scenes": resolveSrc("scenes"),
      "#utils": resolveSrc("utils"),
      "#store": resolveSrc("store"),
      "#theme": resolveSrc("theme"),
    };

    config.module.rules.push({
      test: /\.(ts|tsx|mdx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};

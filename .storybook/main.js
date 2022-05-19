module.exports = {
  stories: [
    // "../src/**/*.stories.@(js|jsx|ts|tsx)",
    {
      directory: "../src/component/ui",
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: "ui",
      // 👇 Storybook will load all files that contain the stories extension
      files: '*.stories.*',
    },
    {
      directory: "../src/component/pure",
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: "pure",
      // 👇 Storybook will load all files that contain the stories extension
      files: '*.stories.*',
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};

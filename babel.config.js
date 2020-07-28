module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3",
        modules: false
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ];
  const plugins = ["@loadable/babel-plugin"];

  return {
    presets,
    plugins
  };
};

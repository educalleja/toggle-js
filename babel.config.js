module.exports = function (api) {
  const targets = api.env('test') ? { node: 'current' } : '> 0.25%, not dead';
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        corejs: 3,
        useBuiltIns: "entry",
        targets
      }
    ]
  ];

  return { presets };
};

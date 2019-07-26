module.exports = function (api) {
  const targets = api.env('test') ? { node: 'current' } : { chrome: 60 };
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'entry',
        targets,
      },
    ],
  ];

  return { presets };
};

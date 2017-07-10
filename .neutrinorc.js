module.exports = {
  use: [
    ['neutrino-preset-react', {
      html: {
        scripts: [
          'https://cdnjs.cloudflare.com/ajax/libs/three.js/86/three.js',
          '/static/DDSLoader.js',
          '/static/ColladaLoader.js',
          '/static/OrbitControls.js',
        ]
      }
    }],
    (neutrino) => neutrino.config.output
      .path('/')
      .publicPath('/')
      .filename('[name].js'),
    (neutrino) => neutrino.config.module
      .rule('compile')
      .use('babel')
      .tap(options => {
        options.plugins.push('relay');
        options.presets.push('flow');
        return options;
      }),
  ]
};

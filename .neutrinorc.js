module.exports = {
  use: [
    'neutrino-preset-react',
    (neutrino) => neutrino.config.module
      .rule('compile')
      .use('babel').tap(options => {
        options.plugins.push('relay');
        options.presets.push('flow');
        return options;
      }),
    ['neutrino-middleware-html-template', {
      inject: false,
      appMountId: 'root',
      xhtml: true,
      mobile: true,
      minify: {
        useShortDoctype: true,
        keepClosingSlash: true,
        collapseWhitespace: true,
        preserveLineBreaks: true
      }
    }],
  ]
};

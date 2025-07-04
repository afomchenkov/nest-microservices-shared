const esbuildPluginTsc = require('esbuild-plugin-tsc');
module.exports = {
  sourcemap: true,
  outExtension: {
    '.js': '.js',
  },
  plugins: [esbuildPluginTsc({ tsconfigPath: 'tsconfig.build.json' })],
  external: [
    '@nestjs/mongoose',
    '@mikro-orm/core',
    '@nestjs/sequelize/dist/common/sequelize.utils',
  ],
};

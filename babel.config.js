module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          auth: './src/auth',
          api: './src/api',
          components: './src/components',
          constants: './src/constants',
          forms: './src/forms',
          helpers: './src/helpers',
          hooks: './src/hooks',
          screens: './src/screens',
          store: './src/store',
          styles: './src/styles',
          utils: './src/utils',
          config: './src/config',
          routes: './src/routes',
          layouts: './src/layouts',
          listeners: './src/listeners',
        },
      },
    ],
  ],
};

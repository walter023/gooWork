module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          components: './src/components',
          config: './src/config',
          data: './src/data',
          helpers: './src/helpers',
          layouts: './src/layouts',
          screens: './src/screens',
          store: './src/store',
          styles: './src/styles',
        },
      },
    ],
  ],
};

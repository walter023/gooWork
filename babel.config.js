module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          styles: './src/styles',
          layouts: './src/layouts',
          screens: './src/screens',
          config: './src/config',
          data: './src/data',
          store: './src/store',
          components: './src/components',
        },
      },
    ],
  ],
};

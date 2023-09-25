/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          '@': './src',
          types: './@types',
        },
      },
    ],
    ...(process.env.NODE_ENV === 'production'
      ? [['transform-remove-console']]
      : []),
    'inline-dotenv',
    'react-native-reanimated/plugin', // needs to be last
  ],
};

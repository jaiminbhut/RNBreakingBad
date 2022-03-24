const alias = { '^@/(.+)': './src/\\1' }; // @/folder will be an alias to <root>/src/folder

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['module-resolver', { alias }]],
};

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size) => (width / guidelineBaseWidth) * size;
const hs = (size) => (width / guidelineBaseWidth) * size;
const vs = (size) => (height / guidelineBaseHeight) * size;
const ms = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const spacing = {
  paddingHorizontal: hs(20),
};

export { hs, vs, ms, width, height, spacing };

import { ms } from '@/theme/spacing';
import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const typography = StyleSheet.create({
  header: { fontFamily: theme.fonts.robotoBold, fontSize: ms(30) },
  title: {
    fontFamily: theme.fonts.robotoBold,
    fontSize: ms(24),
  },
  subTitle: {
    fontFamily: theme.fonts.robotoLight,
    fontSize: ms(24),
  },
  text: {
    fontFamily: theme.fonts.robotoBold,
    fontSize: ms(16),
  },
  label: {
    fontFamily: theme.fonts.robotoLight,
    fontSize: ms(14),
  },
  textInputText: {
    fontFamily: theme.fonts.robotoThin,
    fontSize: ms(34),
  },
  textText: {
    fontFamily: theme.fonts.robotoThin,
    fontSize: ms(34),
  },
  caption: { fontFamily: theme.fonts.robotoMedium, fontSize: ms(14) },
});

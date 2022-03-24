import { hs, theme, typography, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(50),
    paddingHorizontal: hs(24),
  },
  textMessage: {
    ...typography.subTitle,
    color: theme.colors.green,
  },
  textDescription: {
    ...typography.subTitle,
    color: theme.colors.placeholder,
  },
});

export default styles;

import { hs, theme, typography, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.black,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
  },
  textTitle: {
    ...typography.title,
    color: theme.colors.white,
    paddingHorizontal: hs(16),
    paddingVertical: vs(16),
  },
  searchLikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelContainer: {
    marginEnd: hs(6),
    paddingHorizontal: hs(10),
    paddingVertical: vs(10),
  },
  buttonSearch: {
    paddingHorizontal: hs(10),
    paddingVertical: vs(10),
  },
  buttonHeart: {
    marginStart: hs(6),
    marginEnd: hs(6),
    paddingHorizontal: hs(10),
    paddingVertical: vs(10),
  },
});

export default styles;

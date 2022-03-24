import { hs, theme, typography, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.black,
  },
  charactersList: {
    flexGrow: 1,
    flex: 1,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.gray,
    justifyContent: 'space-between',
  },
  cancelContainer: {
    marginEnd: hs(10),
    paddingHorizontal: hs(10),
    paddingVertical: vs(10),
  },
  searchInput: {
    ...typography.textInputText,
    color: theme.colors.white,
    flex: 1,
    paddingVertical: vs(16),
    paddingHorizontal: hs(20),
  },
  safeArea: {
    backgroundColor: theme.colors.gray,
  },
});

export default styles;

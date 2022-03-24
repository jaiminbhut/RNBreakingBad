import { theme } from '@/theme';
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
});

export default styles;

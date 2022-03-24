import { hs, ms, theme, typography, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderTopLeftRadius: ms(5),
    marginVertical: vs(25),
  },
  innerContainer: {
    marginHorizontal: hs(15),
  },
  imageCharacter: {
    width: '100%',
    height: undefined,
    aspectRatio: 0.8,
    borderRadius: ms(5),
  },
  textName: {
    paddingHorizontal: hs(6),
    ...typography.text,
    color: theme.colors.white,
  },
  textNickName: {
    paddingHorizontal: hs(6),
    ...typography.label,
    color: theme.colors.white,
  },
  nameFavoriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: vs(16),
  },
  nameView: { flex: 1 },
});

export default styles;

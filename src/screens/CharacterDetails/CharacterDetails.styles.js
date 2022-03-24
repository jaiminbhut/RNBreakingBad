import { height, hs, ms, theme, typography, vs, width } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {},
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.black,
  },
  headerContainer: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: hs(16),
    paddingVertical: vs(4),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonHeart: {
    padding: hs(10),
  },
  buttonBack: {
    padding: hs(10),
  },
  backgroundImage: {
    width: width,
    height: height / 1.7,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageCharacter: {
    width: hs(156),
    height: undefined,
    aspectRatio: 0.8,
    borderRadius: ms(5),
  },
  name: { ...typography.header, color: theme.colors.white, marginTop: vs(24) },
  nickname: {
    ...typography.label,
    color: theme.colors.white,
    marginVertical: vs(3),
  },
  status: {
    ...typography.caption,
    color: theme.colors.pink,
    marginBottom: vs(10),
  },
  titlePortrayed: {
    ...typography.caption,
    color: theme.colors.green,
  },
  bottomContainer: {
    paddingHorizontal: hs(23),
    marginTop: vs(24),
  },
  portrayedValue: {
    ...typography.label,
    color: theme.colors.white,
    lineHeight: vs(18),
  },
  birthdayValue: {
    ...typography.label,
    color: theme.colors.white,
    lineHeight: vs(18),
    marginEnd: hs(10),
  },
  viewHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewOccupation: {
    marginTop: vs(24),
  },
  textAppearance: {
    ...typography.label,
    color: theme.colors.white,
  },
  viewAppearance: {
    marginTop: vs(5),
    paddingHorizontal: hs(15),
    paddingVertical: vs(5),
    marginEnd: hs(6),
    borderRadius: ms(3),
    backgroundColor: theme.colors.gray,
  },
  viewOtherCharacters: {
    marginTop: vs(50),
  },
  textOtherCharacter: {
    ...typography.title,
    color: theme.colors.white,
  },
  otherCharacter: { width: hs(156) },
  viewBirthday: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;

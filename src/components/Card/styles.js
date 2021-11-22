import { StyleSheet } from 'react-native';
import {
  BorderWidth,
  Color,
  Padding,
  Margin,
} from 'styles';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.WHITE,
    paddingVertical: Padding.SMALL,
    paddingHorizontal: Padding.SMALL,
    borderWidth: BorderWidth.LARGE,
    borderColor: Color.LIGHTGREY,
  },
  cardHeader: {
    flexDirection: 'row',
  },
  image: {
  },
  headerTitles: {
    paddingLeft: Padding.SMALL,
  },
  inline: {
    flexDirection: 'row',
  },
  title: {
    color: Color.WATERMELON,
  },
  icon: {
    alignSelf: 'center',
  },
  label: {
    color: Color.PRIMARY,
  },
  small: {
    marginBottom: Margin.SMALL,
  },
});

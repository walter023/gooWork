import { StyleSheet } from 'react-native';
import { BorderWidth, Color, Padding, Margin } from 'styles';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.WHITE,
    borderBottomWidth: BorderWidth.XSMALL,
    borderColor: Color.LIGHTGREY,
    padding: Padding.XSMALL,
  },
  icon: {
    marginHorizontal: Margin.SMALL,
    alignSelf: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
  },
  bold:{

  },
  inline: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: Color.SKYBLUE,
    fontWeight: 'bold',
  },
  label: {
    color: Color.PRIMARY,
  },
  small: {
    marginBottom: Margin.SMALL,
  },
});

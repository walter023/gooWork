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
  inline: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  boldCopy: {
    fontSize: 16,
    color: Color.GREY,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    color: Color.SKYBLUE,
    fontWeight: 'bold',
  },
  bodyCopy: {
    fontSize: 16,
    color: Color.GREY,
    fontWeight: '400',
  },
  bullet: {
    marginBottom: Margin.SMALL,
  },
  smallCopy: {
    fontSize: 14,
    color: Color.DARKGREY,
    fontWeight: '500',
    alignSelf: 'center',
    paddingLeft: Padding.XSMALL,
  },
  smallCopyLight: {
    color: Color.GREY,
    paddingLeft: 0,
  },
});

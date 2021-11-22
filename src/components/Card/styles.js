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
  inline: {
    flexDirection: 'row',
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
    fontWeight: '400'
  },
  bullet: {
    marginBottom: Margin.SMALL,
  },
});

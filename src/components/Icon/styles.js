import { StyleSheet } from 'react-native';
import { IconSize } from 'styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    width: IconSize.SMALL,
    height: IconSize.SMALL,
  },
  medium: {
    width: IconSize.MEDIUM,
    height: IconSize.MEDIUM,
  },
  large: {
    width: IconSize.LARGE,
    height: IconSize.LARGE,
  },

});

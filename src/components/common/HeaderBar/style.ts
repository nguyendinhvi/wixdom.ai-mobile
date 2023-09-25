import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/Variables';

export const headerBarStyle = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {},
  imageBack: {
    width: 22,
    height: 22,
  },
  title: {
    fontSize: 23,
    fontWeight: '800',
    color: Colors.white,
  },
  viewRight: {
    width: 22,
  },
});

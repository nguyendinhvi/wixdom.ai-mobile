import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '../../../../utils/constant';

const size = (WINDOW_WIDTH - 40 - 15 * 3) / 4;

export const cardNetworkStyle = StyleSheet.create({
  wrap: {
    marginRight: 16,
  },
  image: {
    width: size,
    height: size,
    borderRadius: 22,
    marginBottom: 9,
  },
  title: {
    color: '#000',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 14,
    textAlign: 'center',
    width: size,
  },
});

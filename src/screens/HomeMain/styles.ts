import { StyleSheet } from 'react-native';

export const homeMainStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    // justifyContent: 'center',
  },

  mainImageWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainImage: {
    marginTop: 137,
    marginBottom: 240,
    transform: [{ translateX: -10 }],
  },

  noGameTitle: {
    color: '#FBF5FF',
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '800',
    lineHeight: 25,
  },
  noGameDesc: {
    color: '#FBF5FF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 25,
  },
});

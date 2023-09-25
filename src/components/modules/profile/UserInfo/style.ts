import { StyleSheet } from 'react-native';

export const userInfoStyle = StyleSheet.create({
  container: {},
  imageWrap: {
    marginBottom: 77,
  },
  imageCover: {
    width: '100%',
    height: 168,
  },
  imageAvatarWrap: {
    width: '100%',
    position: 'absolute',
    bottom: -65,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageAvatar: {},
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 12,
  },
  socialWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  socialButton: {},
  socialImage: {},
});

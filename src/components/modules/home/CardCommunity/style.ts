import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '../../../../../src/utils/constant';

export const cardCommunityStyle = StyleSheet.create({
  cardWrap: {
    borderRadius: 22,
    backgroundColor: '#F9F9F9',
    flex: 1,
    width: (WINDOW_WIDTH - 40 - 10) / 2,
  },
  cardInfoWrap: {
    backgroundColor: '#fff',
    paddingTop: 12,
    paddingHorizontal: 10,
    paddingBottom: 8,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
  },

  statistical: {},
  statisticalText: {
    fontSize: 10,
    fontWeight: '500',
    marginBottom: 4,
  },

  userWrap: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userList: {
    marginRight: 8,
  },
  userImageWrap: {},
  userImage: {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
  },
  userOtherText: {
    fontSize: 12,
    fontWeight: '600',
  },
});

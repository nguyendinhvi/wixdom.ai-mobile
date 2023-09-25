import { StyleSheet } from 'react-native';

import { globalStyle } from '../../../../styles/globalStyle';
import { WINDOW_WIDTH } from '../../../../utils/constant';

export const systemWalletStyle = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    display: 'flex',
    padding: 15,
  },
  chain: {
    backgroundColor: '#53F6D8',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 40,
    alignSelf: 'flex-end',
    fontSize: 14,
    fontWeight: '500',
  },
  chainImage: {
    width: 24,
    height: 24,
    borderRadius: 200,
  },
  chainTitle: {},
  tokenTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  tokenFlatList: {
    marginBottom: 10,
  },

  tokenItem: {
    ...globalStyle.flexRowCenter,
    gap: 12,
    minWidth: 150,
    marginBottom: 10,
  },
  tokenCircle: {
    width: 24,
    height: 24,
    backgroundColor: '#EAEAEA',
    borderRadius: 100,
  },
  tokenItemTitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  nftTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  nftList: {},
  nftItem: {
    width: (WINDOW_WIDTH - 70 - 12) / 2,
    marginRight: 12,
    marginBottom: 12,
    borderRadius: 13,
    overflow: 'hidden',
  },
  nftItemImage: {
    height: 115,
  },
  nftItemWrap: {
    padding: 9,
    backgroundColor: '#F9F9F9',
  },
  nftItemName: {
    color: '#7B7583',
    fontSize: 12,
    fontWeight: '700',
  },
  nftItemAuthor: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  nftItemPrice: {
    fontSize: 14,
    fontWeight: '700',
  },
});

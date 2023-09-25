import { StyleSheet } from 'react-native';

export const cardTournamentStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 22,
    // boxShadow: '0px 4px 0px 0px rgba(0, 0, 0, 0.20)',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 11,
    // marginRight: 12,
    marginBottom: 10,
    minWidth: 302,
    // maxWidth: 335,
  },

  mainImageWrap: {
    marginBottom: 11,
  },
  mainImage: {
    height: 174,
    borderRadius: 12,
  },
  qrButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },

  authorWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 5,
  },
  authorImage: {
    width: 24,
    height: 24,
  },
  author: {
    fontSize: 14,
    fontWeight: '700',
  },

  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '800',
  },

  eventWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  eventImage: {
    width: 24,
    height: 24,
  },
  event: {
    fontSize: 14,
    fontWeight: '600',
  },

  timeWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  timeImage: {
    width: 24,
    height: 24,
  },
  time: {
    fontSize: 14,
    fontWeight: '600',
  },

  tags: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
  },

  tagWrap: {
    width: 'auto',
    borderRadius: 12,
    backgroundColor: '#3434E8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  tagImage: {
    width: 15,
    height: 15,
  },
  tagLabel: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
});

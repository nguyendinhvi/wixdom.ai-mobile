import { StyleSheet } from 'react-native';

export const titleSectionStyle = StyleSheet.create({
  wrap: {
    paddingHorizontal: 21,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    color: '#19171A',
    fontSize: 21,
    fontWeight: '800',
    lineHeight: 25,
    width: 200,
  },
  iconRight: {
    width: 16,
    height: 16,
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#FFF',
    paddingRight: 13,
    paddingLeft: 18,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  buttonText: {
    color: '#19171A',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
  },
});

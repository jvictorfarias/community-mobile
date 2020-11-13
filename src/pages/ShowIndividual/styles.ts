import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight - 20,
  },

  header: {
    alignItems: 'center',
  },

  individual: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 24,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#4f6268',
  },

  individualProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  individualValue: {
    marginTop: 4,
    fontSize: 15,
    marginBottom: 8,
    color: '#737380',
  },

  userPlus: {
    alignSelf: 'flex-end',
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#4f6268',
  },

  contactTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#21c8b7',
    lineHeight: 30,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  action: {
    backgroundColor: '#21c8b7',
    borderRadius: 8,
    height: 50,
    width: '32%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  actionIcon: {
    color: '#FFF',
  },
});

import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight - 20,
  },

  Box: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#4f6268',
  },
});

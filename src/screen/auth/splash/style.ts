import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  logo: {
    width: 380,
    height: 380,
   },
   
});

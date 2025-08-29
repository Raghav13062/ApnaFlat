import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    color: '#2EACB9',
    fontWeight: '600',
    textAlign: 'center',
    marginTop:30,
    lineHeight:30,

  },
  subtitle: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#FFA044',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

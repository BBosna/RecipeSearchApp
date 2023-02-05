import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    height: deviceSize.height / 5,
    resizeMode: 'contain',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  text: {
    paddingLeft: 10,
    height: '30%',
    color: 'white',
    backgroundColor: '#00000090',
    ellipsizeMode: 'tail',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    Opacity: 0.7,
  },
});

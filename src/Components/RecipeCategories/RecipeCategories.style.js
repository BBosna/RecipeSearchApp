import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 45,
    borderColor: 'lightgrey',
    borderWidth: 1,
    alignItems: 'center',
  },
  title: {color: 'black', marginLeft: 10, fontSize: 20},
  image: {
    width: 100,
    minHeight: 60,
    borderRadius: 30,
    resizeMode: 'contain',
    marginLeft: 5,
  },
});

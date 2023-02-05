import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  page: {
    backgroundColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  image: {
    height: deviceSize.height / 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  body_container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    textAlign: 'center',
    color: 'firebrick',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
  },
  area: {
    textAlign: 'center',
    color: 'firebrick',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  recipe: {
    marginTop: 30,
    marginBottom: 20,
    color: 'black',
    fontSize: 15,
  },
});

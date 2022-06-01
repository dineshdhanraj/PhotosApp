import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const PhotosAppStyles = StyleSheet.create({
  MainContent: {
    flex: 1,
  },

  MainContentView: {marginTop: 20, marginLeft: 5, marginRight: 10},

  Heading: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
  },
  Indicator: {
    position: 'absolute',
    marginLeft: 180,
    marginTop: 270,
  },
  textstyle: {
    flex: 2,
    fontWeight: 'bold',
    borderRadius: 15,
    borderWidth: 2,
    paddingRight: 10,
    width: '50%',
    fontSize: 18,
    paddingLeft: 20,
    justifyContent: 'center',
    color: 'black',
    marginRight: 50,
    backgroundColor: 'lightblue',
  },

  ItemView: {
    marginLeft: 20,
    marginRight: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  seperator: {
    flexDirection: 'row',
    marginTop: 20,
  },

  ListItemView: {
    marginTop: 20,
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
  },

  Error: {
    color: 'red',
    fontSize: 25,
    marginLeft: 140,
    marginTop: 20,
    marginRight: 50,
  },

  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
    height: 180,
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 7,
  },
  textInput: {
    width: '80%',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    marginBottom: 8,
  },

  ItemView: {
    marginLeft: 20,
    marginRight: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  seperator: {
    flexDirection: 'row',
    marginTop: 20,
  },
  PlaceholderText: {
    borderRadius: 15,
    borderWidth: 3,
    width: '80%',
    paddingLeft: 15,
    paddingRight: 10,
  },
  Cancel: {
    paddingLeft: 15,
    marginLeft: 10,
    backgroundColor: 'lightblue',
    paddingRight: 5,
    color: 'black',
    width: '25%',
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 3,
    fontWeight: 'bold',
  },
  ButtonView: {flexDirection: 'row', marginTop: 30},
  Ok: {
    backgroundColor: 'lightblue',
    paddingLeft: 25,
    paddingRight: 5,
    width: '25%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 80,
  },
  NewTitle: {
    fontSize: 15,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 10,
    backgroundColor: 'powderblue',
    marginTop: 20,
    paddingLeft: 25,
    color: 'black',
    fontWeight: 'bold',
    borderRadius: 20,
    borderWidth: 5,
  },
  Indicator:{
    position:'absolute',
    marginLeft:180,
    marginTop:350
  },
  ListItemView: {
    marginTop: 20,
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
  },
});
export default PhotosAppStyles;

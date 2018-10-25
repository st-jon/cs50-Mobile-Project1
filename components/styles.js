import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  head:{
    marginTop: 80,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 76,
    fontFamily: 'Helvetica',
    marginBottom: 40,
    textAlign: 'center'
  },
  message: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 35,
    marginTop: 40,
    marginBottom: 20,
  },
  numInput: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
    height: 30,
    width: 80,
  },
  button: {
    borderColor: '#0273e5',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#0273e5',
    borderRadius: 30,
    width: 230,
  },
  selectors: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  }
})

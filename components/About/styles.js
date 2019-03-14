import {StyleSheet, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width

export default styles = StyleSheet.create({
   chelou : {
    width : deviceWidth,
    display : 'flex',
    justifyContent : 'center'
    
   },
   image : {
    width : 260,
    height : 65
   },
   imageContainer : {
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    width : 260,
    paddingTop : 20
   },
   border : {
      borderBottomColor: '#e6e6e6',
      borderBottomWidth: 1,
      paddingBottom: 20,
      marginBottom : 25
   },
   title : {
      fontFamily : 'Montserrat',
      marginLeft : 10,
      fontWeight : '800',
      fontSize : 25,
      marginBottom: 20,
      marginTop: 20,
   },
   text : {
      fontFamily : 'Montserrat',
      marginLeft : 10,
      fontWeight : '300',
      fontSize : 18,
      width : '96%',
      marginBottom : 20
   }
});
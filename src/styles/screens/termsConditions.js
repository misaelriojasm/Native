import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
const terms = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      width:'100%',
      height:hp(7),
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerText:{
      color:'white',
      fontSize:wp(5),
      fontWeight:'200'
    },
    buttonContainer:{
      alignItems:'center',
      justifyContent:'center',
    },
    buttonStyle:{
      alignItems:'center',
      justifyContent:'center',
      width:wp(30),
      height:hp(5),
      backgroundColor:'#002448',
      borderRadius:20
    },
    inputContainer:{
      alignItems:'center',
      justifyContent:'center',
    },
    inputStyle:{
      alignItems:'center',
      justifyContent:'center',
      width:wp(30),
      height:hp(5),
      backgroundColor:'white',
      borderColor:'blue',
      borderWidth:1,
      borderRadius:20
    },
    body: {
      paddingTop:hp(2),
      alignItems:'center',
      justifyContent:'flex-start',
      width:'100%',
      height:'100%'
    },
  });

 
 
  
  export {terms}
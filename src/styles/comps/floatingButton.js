import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
const floatingButton = StyleSheet.create({
    container: {
      flex: 1,
    },
    body: {
      paddingTop:hp(2),
      alignItems:'center',
      justifyContent:'flex-start',
      width:'100%',
      height:'100%'
    },
  });

 
 
  
  export {floatingButton}
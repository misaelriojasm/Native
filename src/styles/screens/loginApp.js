import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Color} from 'styles'

const login = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: Color.background
    },
    
    wrapper:{
      paddingBottom:hp(6)
    },

    logo:{

    },

    buttonContainer:{
      marginTop:hp(5)
    },

    button:{

    }
   
  });

 
 
  
  export {login}
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {Color} from "styles";

const button = StyleSheet.create({
 
  container: {
    backgroundColor: Color.background,
    alignItems:'center',
    justifyContent:'center',
    width:wp(80),
    height:hp(6),
    borderColor:'white',
    borderWidth:1,
    borderRadius:20
  },
  
  textContainer: {
  },

  text: {
    color: "white",
    fontSize: wp(5),
    fontWeight: '500'
  },

  
});

export { button };


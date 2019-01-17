import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const imageLogo = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: wp(80),
    height: hp(40)
  },

  logo: {
    width: "99%",
    height: "99%",
    borderRadius: 300
  }
});

export { imageLogo };

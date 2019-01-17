
import React from "react";
import { View } from "react-native";
import { login, Color } from "styles";
import { ImageLogo, Button } from "Components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class LoginApp extends React.Component {
  render() {
    return (
      <View style={login.container}>
        <View style={login.wrapper}>
          <View>
            <ImageLogo />
          </View>
          <View style={login.buttonContainer}>
            <Button Title={"SignUp"} onPress={()=>{ this.props.navigation.push("RegisterApp");}} />
            <Button
              Title={"LogIn"}
              Container={{ backgroundColor: "white", marginVertical:hp(2) }}
              TextStyle={{ color: Color.background }}
              onPress={()=>{this.props.navigation.push("Welcome");}}
            />
          </View>
        </View>
      </View>
    );
  }
}

export { LoginApp };
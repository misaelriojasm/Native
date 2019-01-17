import React from "react";
import { View, Image } from "react-native";
import { imageLogo } from "../styles";
 
class ImageLogo extends React.Component {
  render() {
    return (
        <View style={[imageLogo.container, this.props.Container]}>
      <Image
        source={require("../assets/imgs/logo.jpg")}
        style={[imageLogo.logo, this.props.logo ]}
      />
      </View>
    );
  }
}

export { ImageLogo };



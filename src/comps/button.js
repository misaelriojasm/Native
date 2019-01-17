import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { button } from "styles";

class Button extends React.Component {
  render() {
    return (
        <TouchableOpacity style={[button.container, this.props.Container]} onPress={this.props.onPress}>
          <View style={[button.textContainer, this.props.TextContainer]}>
            <Text style={[button.text, this.props.TextStyle]}>{ this.props.Title==null? 'Button' : this.props.Title }</Text>
          </View>
        </TouchableOpacity>
    );
  }
}

export { Button };

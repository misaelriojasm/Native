import React, {Component} from "react";
import { Button, View, Text } from 'react-native';

class DetailContent extends Component {
 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'red' }}>
        <Text>DetailContent</Text>
       
      </View>
    );
  }
}

export {DetailContent}
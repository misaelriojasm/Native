import React from "react";
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component {
 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'red' }}>
        <Text>HomeScreen</Text>
       
      </View>
    );
  }
}

export { HomeScreen }
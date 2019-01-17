import React from "react";
import { Button, View, Text } from 'react-native';

class RegisterApp extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'red' }}>
        <Text>Register Screen</Text>
        <Button
          title="Go to Welcome"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Welcome');
          }}
        />
      </View>
    );
  }
}

export { RegisterApp }

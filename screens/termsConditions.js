import React from "react";
import { Button, View, Text } from 'react-native';

class TermsConditions extends React.Component {
 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'red' }}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.back();
          }}
        />
      </View>
    );
  }
}

export { TermsConditions }

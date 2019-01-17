import React from "react";
import { Button, View, Text } from 'react-native';
import { BackHandler,  ToastAndroid } from "react-native";

class WelcomeScreen extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton() {
    ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    return true;
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'red' }}>
        <Text>Welcome Screen</Text>
        <Button
          title="Go to TabNavigator"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('TabNavigator');
          }}
        />
      </View>
    );
  }
}

export { WelcomeScreen }

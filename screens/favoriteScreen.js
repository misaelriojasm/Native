import React from "react";
import { Button, View, Text } from 'react-native';

class FavoriteScreen extends React.Component {
 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'red' }}>
        <Text>Favorite Screen</Text>
        
      </View>
    );
  }
}

export { FavoriteScreen }
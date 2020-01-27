import React from 'react';
import { View, Text, Button ,StyleSheet } from 'react-native';
import { Header,Icon } from 'react-native-elements';

export class HomeScreen extends React.Component {
  state = { uname: "User", pass: "1234" };

  render() {
    return (
      <View style={styles.container}>
      <Header>
        <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}/>
        <Text>Home</Text>
      </Header>
      
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Welcome XXX</Text>
        </View>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  
  }
})


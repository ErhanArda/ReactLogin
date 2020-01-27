import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { Header,Icon } from 'react-native-elements';


export class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
      <Header>
        <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}/>
        <Text>Settings</Text>
      </Header>
      
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Settings</Text>
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
  
  
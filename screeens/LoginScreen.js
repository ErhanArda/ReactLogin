import React from 'react';
import { StyleSheet,View,Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export  class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1}}  placeholder="Username" ></TextInput>
                <TextInput style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1,marginTop:8}} placeholder="Password" secureTextEntry={true}></TextInput>
                <Button title="Login" 
                    onPress={() => this.props.navigation.navigate('HomeScreen',{
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


import React from 'react';
import { StyleSheet,View,Button,Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export  class LoginScreen extends React.Component {

    state = { uname: "", pass: "", wlimit: 5 };

    isMet = () => {

        if (String(this.state.uname).length >= this.state.wlimit && String(this.state.pass).length >= this.state.wlimit){
            this.setState({ uname:"", pass:"" });
            this.props.navigation.navigate('HomeScreen', {/*Uname send */});
         }
        else{
            Alert.alert('Alert', 'Please type more then '+ this.state.wlimit + ' words '+ this.state.pass);
        }
            
    }

    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput value={this.state.uname} style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}  onChangeText={(text) => this.setState({ uname: text })} placeholder="Username" ></TextInput>
                <TextInput value={this.state.pass} style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 8 }} onChangeText={(text) => this.setState({ pass: text })} placeholder="Password" secureTextEntry={true}></TextInput>
                <Button title="Login" 
                    onPress={this.isMet}></Button>
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


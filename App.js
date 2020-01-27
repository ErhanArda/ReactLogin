import React from 'react';
import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { DetailsScreen, HomeScreen, LoginScreen} from './screeens'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { SafeAreaView,ScrollView, Dimensions,View,Text, Button} from 'react-native';


const {width} = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    const AppNavigator = createAppContainer(Drawer);
    return (
      <AppNavigator/>
    );
  }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1}}> 
     <View style={{height: 100, backgroundColor: 'white'}}>
      <Text style={{textAlign:'center',fontSize:40,padding:20}}>Menu</Text>
     </View>
      <ScrollView>
        <DrawerItems {...props}/>
      </ScrollView>
    </SafeAreaView>
)


const Drawer = createDrawerNavigator({
  HomeScreen,
  DetailsScreen,
  LoginScreen
}, {
  contentComponent:CustomDrawerComponent,
  drawerWidth: width * 2 / 3,
  contentOptions: {
    activeTintColor: 'grey'
  }
});






/*const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);*/

//const AppContainer = createAppContainer(AppNavigator);





//export default createAppContainer(Drawer);
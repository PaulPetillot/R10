import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AboutScreen from '../screens/about/AboutScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { sharedNavigationOptions } from './config';
import FavesScreen from '../screens/faves/FavesScreen'
const AboutStack = createStackNavigator({
  About: AboutScreen
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation)
  })
},
);

const FavesStack = createStackNavigator({
  Faves: FavesScreen
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation)
  })
},
);

export default createBottomTabNavigator(
  {
    Faves : FavesStack,
    About : AboutStack
  },
  { tabBarOptions: 
    { activeTintColor : 'white', inactiveTintColor : '#999999', labelStyle:{ fontSize : 10}, style:{backgroundColor : 'black'} },
   
   defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
        <Icon style={{marginTop : 5}} name={navigation.state.routeName === 'About'?"info-circle":"info-circle" && navigation.state.routeName === 'Faves'?"heart":"heart"}
          size={25} color={focused?'white':'#999999'} />
          )
    }
})}
  );
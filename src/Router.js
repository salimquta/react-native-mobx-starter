import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Icon} from 'native-base';
import {createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator} from 'react-navigation';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Drawer from './components/Drawer/Drawer';
import List from './screens/List/List';


const StackNavigator = createStackNavigator({
    LOGIN: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    SIGNUP: {
        screen: Signup,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    }
}, {
    initialRouteName: "LOGIN"
});

const DrawerNavigator = createDrawerNavigator({
        LIST: {
            screen: List,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'List Items',
                drawerIcon: ({tintColor}) => (
                    <Icon type="FontAwesome" name="list" style={{fontSize: 20, color: 'gray'}}/>
                )
            })
        },
        LOGOUT: {
            screen: Login,
            navigationOptions: ({navigation}) => ({
                DrawwerLabel: 'Logout',
                drawerIcon: ({tintColor}) => (
                    <Icon type="FontAwesome" name="sign-out" style={{fontSize: 20, color: 'gray'}}/>
                )
            })
        }
    }
    // ,
    // {
    //     contentComponent: Drawer,
    // }
);

const AppNavigator = createSwitchNavigator({
    Auth: StackNavigator,
    Home: DrawerNavigator,
});

export default createAppContainer(AppNavigator);





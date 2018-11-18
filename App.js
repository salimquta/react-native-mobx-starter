import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'mobx-react';
import AuthStore from './src/stores/AuthStore';
import Login from './src/components/auth/Login';

// add stores here
const stores = {
    AuthStore
};
export default class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <Login/>
            </Provider>
        );
    }
}
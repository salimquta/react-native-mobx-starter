import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'mobx-react';
import AuthStore from './src/stores/AuthStore';
// add stores here
const stores = {
    AuthStore
};
export default class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <View style={styles.container}>
                    <Text>Open  App.js to start working on your app!</Text>
                </View>
            </Provider>
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

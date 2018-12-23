import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'mobx-react';
import AuthStore from './src/stores/AuthStore';
import Router from './src/Router';
import {Container} from 'native-base';
import {Font} from 'expo';

// add stores here
const stores = {
    AuthStore
};
export default class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            fontLoaded: false
        }
    }


    async componentDidMount() {
        // await  Font.loadAsync({
        //     'roboto': require('./assets/fonts/Roboto/Roboto-Light.ttf'),
        // });
        this.setState({fontLoaded: true});
    }

    render() {
        return (
            <Provider {...stores}>
                <Container>
                    {this.state.fontLoaded ?
                        <Router/>
                        : <Text>Loading ... </Text>}
                </Container>

            </Provider>
        );
    }
}
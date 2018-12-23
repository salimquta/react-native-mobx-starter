import React, {Component} from 'react';
import {Image} from 'react-native';
import style from './style';

export default class Logo extends Component {
    render() {
        return (
            <Image style={style.logo} source={require('./assets/logo.png')}/>
        )
    }
}
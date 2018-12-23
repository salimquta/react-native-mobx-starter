import React, {Component} from 'react';
import {Button, Icon, Item} from 'native-base';
import {Text, View, TouchableOpacity} from 'react-native';

import style from './style';

export default class CustomButton extends Component {
    render() {
        const {type, label, icon, value, onPressFun, onPressParams} = this.props;
        return (
            <View>
                <Button iconLeft style={style.button} onPress={() => onPressFun ? onPressFun(onPressParams) : ''}>
                    <Text style={style.text}>{label}</Text>
                    <Icon name={icon}/>
                </Button>
            </View>
        )
    }
}
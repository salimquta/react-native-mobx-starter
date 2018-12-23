import React, {Component} from 'react';
import {Label, Input, Item, Icon} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';

import style from './style';

export default class CustomInput extends Component {
    render() {
        const {type, label, icon, value, onChange} = this.props;
        return (
            <Item floatingLabel style={style.item}>
                <Label style={style.label}>{label}</Label>
                <Input style={style.input}
                       type={type}
                       onChangeText={onChange}
                       value={value}
                       secureTextEntry={type == 'password' ? true : false}
                />
                <Icon name={icon} style={{color: 'white'}}/>

            </Item>
        )
    }
}
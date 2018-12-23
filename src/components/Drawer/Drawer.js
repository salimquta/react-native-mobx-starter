import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon, Label, Thumbnail, ListItem, Left, Button, Body} from 'native-base';
import style from './style';

export default class Drawer extends Component {
    render() {
        return (
            <View style={style.view}>
                <View stlye={style.avatar}>
                    <Thumbnail
                        style={style.avatarThmb}
                        source={{uri: 'https://scontent.fjrs5-1.fna.fbcdn.net/v/t1.0-1/p160x160/24862352_1612720085433251_8708531677436447693_n.jpg?_nc_cat=101&_nc_ht=scontent.fjrs5-1.fna&oh=06a2847ee106a94b54be8d7434f3bc65&oe=5CA360FA'}}/>
                    <Text>Salim Abu Quta</Text>
                </View>
                <View style={{flex: 1}}>
                    <ListItem icon style={style.listItem}>
                        <Left>
                            <Icon type="FontAwesome" name="list"/>
                        </Left>
                        <Text>List</Text>
                    </ListItem>
                    <ListItem icon style={style.listItem}>
                        <Left>
                            <Icon type="FontAwesome" name="sign-out"/>
                        </Left>
                        <Text>Logout</Text>
                    </ListItem>

                </View>
            </View>

        )
    }
}
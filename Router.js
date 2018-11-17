
import React  from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';

export const Root = StackNavigator({
    Home: {
        screen: HomeView,
    },
    SubTitles : {
        screen: subTitlesScreen,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.name,
            headerTintColor : 'white',
            headerStyle : {
                backgroundColor : '#33AADD'
            }
        }),
    },

    SubTitleView : {
        screen: subTitleView,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.subTitle.sub_title_name,
            headerTintColor : 'white',
            headerStyle : {
                backgroundColor : '#33AADD'
            }
        }),
    }
});




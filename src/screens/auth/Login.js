import React from 'react'
import {observer, inject} from 'mobx-react';
import {View, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import styles from '../../styles/style';
import {Text, Content, Form} from "native-base";
import Logo from '../../components/Logo/Logo';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const BG_IMAGE = {uri: "https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen1.jpg"};

// @inject('AuthStore')
@observer
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: true,
            email: '',
            email_valid: true,
            password: '',
            login_failed: false,
            showLoading: false
        };
        this.goTo = this.goTo.bind(this);
    }

    async componentDidMount() {
        this.setState({fontLoaded: true});
        console.log('state : ', this.state);
    }

    goTo(toScreen) {
        console.log('GO TOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', toScreen);
        const {navigation} = this.props
        navigation.navigate(toScreen)
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    }

    submitLoginCredentials() {
        const {showLoading} = this.state;

        this.setState({
            showLoading: !showLoading
        });
    }


    render() {
        const {email, password, email_valid, showLoading, fontLoaded} = this.state;

        return (
            <View style={styles.container}>
                <ImageBackground
                    source={BG_IMAGE}
                    style={styles.bgImage}
                >
                    <Logo/>
                    <View>
                        <Form style={{alignItems: 'center'}}>
                            <CustomInput type={"text"} label={"Username"} icon={'person'}/>
                            <CustomInput type={"password"} label={"Password"} icon={'unlock'}/>
                            {/*<View style={{flexDirection: 'row'}}>*/}
                            <CustomButton label={'Login'} icon={'md-arrow-forward'} onPressFun={this.goTo}
                                          onPressParams={'LIST'}/>
                            <CustomButton
                                label={'New User'}
                                icon={'person'}
                                onPressFun={this.goTo}
                                onPressParams={'SIGNUP'}
                            />


                            {/*</View>*/}
                        </Form>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Login

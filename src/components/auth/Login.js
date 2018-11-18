import React from 'react'
import {observer, inject} from 'mobx-react';
import {View, Text, ImageBackground, Dimensions} from 'react-native';
import {FormInput , Button} from 'react-native-elements'
import styles from '../../styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    }

    async componentDidMount() {
        this.setState({fontLoaded: true});
        console.log('state : ', this.state);
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
                    {fontLoaded ?
                        <View style={styles.loginView}>
                            <View style={styles.loginTitle}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.travelText}>1Shift</Text>

                                </View>
                            </View>
                            <View style={styles.loginInput}>
                                <FormInput
                                    leftIcon={
                                        <Icon
                                            name='user-o'
                                            color='rgba(171, 189, 219, 1)'
                                            size={25}
                                        />
                                    }
                                    containerStyle={{marginVertical: 10}}
                                    onChangeText={email => this.setState({email})}
                                    value={email}
                                    inputStyle={{marginLeft: 10, color: 'white'}}
                                    keyboardAppearance="light"
                                    placeholder="Email"
                                    autoFocus={false}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    ref={input => this.emailInput = input}
                                    onSubmitEditing={() => {
                                        this.setState({email_valid: this.validateEmail(email)});
                                        this.passwordInput.focus();
                                    }}
                                    blurOnSubmit={false}
                                    placeholderTextColor="white"
                                    errorStyle={{textAlign: 'center', fontSize: 12}}
                                    errorMessage={email_valid ? null : "Please enter a valid email address"}
                                />
                                <FormInput
                                    leftIcon={
                                        <Icon
                                            name='lock'
                                            color='rgba(171, 189, 219, 1)'
                                            size={25}
                                        />
                                    }
                                    containerStyle={{marginVertical: 10}}
                                    onChangeText={(password) => this.setState({password})}
                                    value={password}
                                    inputStyle={{marginLeft: 10, color: 'white'}}
                                    secureTextEntry={true}
                                    keyboardAppearance="light"
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="default"
                                    returnKeyType="done"
                                    ref={input => this.passwordInput = input}
                                    blurOnSubmit={true}
                                    placeholderTextColor="white"
                                />
                            </View>
                            <Button
                                title='LOG IN'
                                activeOpacity={1}
                                underlayColor="transparent"
                                onPress={this.submitLoginCredentials.bind(this)}
                                loading={showLoading}
                                loadingProps={{size: 'small', color: 'white'}}
                                disabled={!email_valid && password.length < 8}
                                buttonStyle={{
                                    height: 50,
                                    width: 250,
                                    backgroundColor: 'transparent',
                                    borderWidth: 2,
                                    borderColor: 'white',
                                    borderRadius: 30
                                }}
                                containerStyle={{marginVertical: 10}}
                                titleStyle={{fontWeight: 'bold', color: 'white'}}
                            />
                            <View style={styles.footerView}>
                                <Text style={{color: 'grey'}}>
                                    New here?
                                </Text>
                                <Button
                                    title="Create an Account"
                                    clear
                                    activeOpacity={0.5}
                                    titleStyle={{color: 'white', fontSize: 15}}
                                    containerStyle={{marginTop: -10}}
                                    onPress={() => console.log('Account created')}
                                />
                            </View>
                        </View> :
                        <Text>Loading...</Text>
                    }
                </ImageBackground>
            </View>
        );
    }
}

export default Login

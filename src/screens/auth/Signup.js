import React from 'react'
import {observer, inject} from 'mobx-react';
import {View, ImageBackground, Dimensions} from 'react-native';
import styles from '../../styles/style';
import {Text, Content, Form} from "native-base";
import Logo from '../../components/Logo/Logo';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const BG_IMAGE = {uri: "https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen1.jpg"};

// @inject('AuthStore')
@observer
class Signup extends React.Component {
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
                    <Logo/>
                    <View>
                        <Form style={{alignItems: 'center'}}>
                            <CustomInput type={"text"} label={"Username"} icon={'person'}/>
                            <CustomInput type={"password"} label={"Password"} icon={'unlock'}/>
                            <CustomInput type={"email"} label={"Email"} icon={'mail'}/>
                            <CustomInput type={"text"} label={"Mobile"} icon={'md-phone-portrait'}/>
                            <CustomButton label={'Signup'} icon={'md-arrow-forward'}/>
                            <CustomButton label={'Back'} onPressFun={this.props.navigation.goBack.bind(this)}/>
                        </Form>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Signup

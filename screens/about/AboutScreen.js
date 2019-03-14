import React, {Component} from 'react';
import AboutContainer from '../../components/About/AboutContainer';
import {View} from "react-native";

class AboutScreen extends Component {
    static navigationOptions = {
        title: 'About'
    };

    render() {
        return (
            <View>
                <AboutContainer/>
            </View>
        );
    }
}
export default AboutScreen;
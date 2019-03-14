import React, {Component} from 'react';
import FavesContainer from './FavesContainer';
import {View} from "react-native";

class FavesScreen extends Component {
    static navigationOptions = {
        title: 'Faves'
    };

    render() {
        return (
            <View>
                <FavesContainer/>
            </View>
        );
    }
}
export default FavesScreen;
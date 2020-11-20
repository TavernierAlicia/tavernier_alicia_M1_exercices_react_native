import React from 'react';
import { Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default class Exo2 extends React.Component {

    // instance
    constructor(props) {
        super(props)

    }

    // set title
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getScreenProps().routes[navigation.state.routeName].title,
        };
    };

    // oninit
    componentDidMount() {

    }

    // onclose
    componentWillUnmount() {

    }

    clickAlert() {
        return Alert.alert(
            'Alert exo', 
            'bonjour', 
            [
                { text: 'OK', onPress: () => {} }
            ],
            { cancelable: false }
        );
    }

    // render
    render() {


        const styles = StyleSheet.create({

        });


        return (
            <TouchableOpacity>
                <Button title="Click here" onPress={this.clickAlert} />
            </TouchableOpacity>
                
        );

    }
}
  
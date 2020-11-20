import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Exo5 extends React.Component {

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

    // render
    render() {


        const styles = StyleSheet.create({
            container: {
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around'
            },
            squarecontainer: {
                height: 100,
                width: 100,
                backgroundColor: '#6af'
            },
            square: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            },
            text: {
                fontSize: 16,
            }
        });


        return (
            <View style={styles.container} >
                <View style={[styles.squarecontainer, {backgroundColor: '#6af'}]}>
                    <View style={styles.square} >
                        <Text>Square 1</Text>
                    </View>
                </View>
                <View style={[styles.squarecontainer, {backgroundColor: '#9eb'}]}>
                    <View style={styles.square} >
                        <Text>Square 2</Text>
                    </View>
                </View>
                <View style={[styles.squarecontainer, {backgroundColor: '#fba'}]}>
                    <View style={styles.square} >
                        <Text>Square 3</Text>
                    </View>
                </View>
            </View>
        );

    }

}
  
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Exo6 extends React.Component {

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
            },
            squarecontainer: {
                height: 100,
                width: 100,
                backgroundColor: '#6af',
                marginVertical: 50
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

        const Square = (id) => (
            <View style={styles.squarecontainer} key={id}>
                <View style={styles.square} >
                    <Text>Square {id+1}</Text>
                </View>
            </View>
        )

        const Squares = [];
        for (let i = 0, j = 15; i < j; i ++) {
            Squares.push(Square(i));
        }


        return (
            <ScrollView style={styles.container}>
                {Squares}
            </ScrollView>
        );

    }

}
  
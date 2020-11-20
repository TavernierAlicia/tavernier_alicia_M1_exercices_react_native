import React from 'react';
import { Text, View, Alert, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

export default class Exo7 extends React.Component {

  // instance
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    };

  }

  // set title
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getScreenProps().routes[navigation.state.routeName].title,
    };
  };


  clickAlert() {

    return Alert.alert(
      (this.state.name === '') ? 'Warning' : 'Message for you',
      (this.state.name === '') ? 'Name is not filled' : 'Hello ' + this.state.name,
      [
        { text: 'OK', onPress: () => { } }
      ],
      { cancelable: false }
    );

  }

  inputFilled(value) {
    this.setState({ name: value })
  }

  // oninit
  componentDidMount() {
    this.setState({ name: '' })
  }

  // onclose
  componentWillUnmount() {
    this.setState({ name: '' })
  }

  // render
  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
      },
      text: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
      },
      textinput: {
        marginHorizontal: 20,
        borderBottomWidth: 1,
        paddingVertical: 2,
        fontSize: 18,
        alignSelf: 'stretch',
        fontFamily: 'monospace',
      },
      btn: {
        width: 150,
        height: 50,
        backgroundColor: '#fba',
        marginVertical: 25,
        justifyContent: 'center',
        borderRadius: 15,
      },
      btnText: {
        alignItems: "center",
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 22,
      },
    });

    return (

      <View style={styles.container} >
        <Text style={styles.text}>Enter your name here:</Text>
        <TextInput
          style={styles.textinput}
          autoCompleteType='name'
          onChangeText={(value) => this.inputFilled(value)}
          value={this.state.name}
          placeholder='Your name'
        />
        <TouchableOpacity style={styles.btn} onPress={() => this.clickAlert()} >
          <View style={styles.btnText} >
            <Text style={styles.btnText}>Go!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );

  }

}

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class MyButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: props.title, fn : props.fn || (_ => {})}
  }


  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        height: "100%",
        width: "100%",
        overflow: "hidden",
      },
      btn: {
        width: 150,
        height: 50,
        backgroundColor: '#fba',
        marginVertical: 25,
        justifyContent: 'center',
        borderRadius: 15,
        alignItems: "center",
      },
      btnText: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 22,
      },
    });

    return (
      <TouchableOpacity style={styles.btn} onPress={this.state.fn} >
        <Text
          style={styles.btnText}
        >{this.state.title}</Text>
      </TouchableOpacity>
    );

  }
}


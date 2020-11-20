import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

class HelloWorld extends React.Component {
    render() {
      return (
      <View>
        <Text style={styles.title}>1 - Hello World</Text>
        <View style={styles.square}>
          <Text>Hello world</Text>
        </View>
      </View>
      )
    }
}

const styles = StyleSheet.create({
  square: {
    height:50, 
    width:50,
    backgroundColor: 'gray',
    fontSize: 30,
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingBottom: 10,
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
})


export default HelloWorld
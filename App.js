import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import ListExos from './components/ListExos';
import HelloWorld from './components/views/HelloWorld';


export default class App extends React.Component {

  constructor(){
    super();
  }
  render() {
      return (
        <View style={styles.container}>
          <ListExos />
          {/* <HelloWorld /> */}
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




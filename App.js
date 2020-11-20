import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { createAppContainer, NavigationProvider } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Footer from './components/footer.js';

import Exo1 from './components/exo1.js';
import Exo2 from './components/exo2.js';
import Exo3 from './components/exo3.js';
import Exo4 from './components/exo4.js';
import Exo5 from './components/exo5.js';
import Exo6 from './components/exo6.js';
import Exo7 from './components/exo7.js';
import Exo8 from './components/exo8.js';
// import Exo9 from './components/exo9.js';
// import Exo10 from './components/exo10.js';
// import Exo11 from './components/exo11.js';
import Exo12 from './components/exo12.js';

// https://github.com/react-navigation/react-navigation/issues/456#issuecomment-463164429
const navigation = React.createRef()

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isFooter: false };
    this.handleNavigationChange = (prev, next, action) => {
      const route = next.routes[next.index].routeName;
      this.setState({ isFooter: route != 'Menu' })
    }

  }


  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        height: "100%",
        width: "100%",
        overflow: "hidden"
      }
    });

    return (
      <View style={styles.container}>
        <AppContainer onNavigationStateChange={this.handleNavigationChange} screenProps={{ routes: Routes }} ref={navigation} />
        {this.state.isFooter && <Footer navigation={navigation.current} />}
      </View>
    );

  }
}

const Routes = {
  // Exo 1
  "HelloWorld": {
    screen: Exo1,
    title: "Hello World!",
    numExo: 1
  },
  // Exo 2
  "CaptureTaps": {
    screen: Exo2,
    title: "Capture taps",
    numExo: 2
  },
  // // Exo 3
  "ComponentCustom": {
    screen: Exo3,
    title: "Composant Custom",
    numExo: 3
  },
  // // Exo 4
  "StatesProps": {
    screen: Exo4,
    title: "Les states et les props",
    numExo: 4
  },
  // // Exo 5
  "Styling": {
    screen: Exo5,
    title: "Styling avec React Native",
    numExo: 5
  },
  // // Exo 6
  "Scrollable": {
    screen: Exo6,
    title: "Contenu Scrollable",
    numExo: 6
  },
  // Exo 7
  "Form": {
      screen: Exo7,
      title: "Construire un formulaire",
  	   numExo: 7
  },
  // Exo 8
  "List": {
      screen: Exo8,
      title: "Liste",
  	   numExo: 8
  },
  // // Exo 9
  // "API": {
  //     screen: Exo9,    
  //     title: "Utiliser une API / service",
  // 	   numExo: 9
  // },
  // // Exo 10
  // "MultipleFiles": {
  //     screen: Exo10,
  //     title: "Fichiers multiples",
  // 	   numExo: 10
  // },
  // // Exo 11
  // "ComponentClass": {
  //     screen: Exo11,
  //     title: "Composant class",
  // 	   numExo: 11
  // },

  // Exo 12
  // "Lifecycle": {
  'Menu': {
    screen: Exo12,
    title: "Menu - Lifecycle",
    numExo: 12
  }

};


// https://reactnavigation.org/docs/4.x/

const AppNavigator = createStackNavigator(Routes, {
  initialRouteName: 'Menu',
  defaultNavigationOptions: {
    headerLeft: _ => { }
  }
});

const AppContainer = createAppContainer(AppNavigator);

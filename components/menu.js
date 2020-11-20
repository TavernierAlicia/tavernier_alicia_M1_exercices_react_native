import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default class Menu extends React.Component {

  constructor(props) {
    super(props)

    // Create list from routes list
    this.state = {
      routes: function () {
        const routes = props.screenProps.routes;
        const routesItem = [];
        for (let r in routes) {
          if (r == 'Menu') continue;
          routesItem.push({ id: r, title: routes[r].title, num: routes[r].numExo })
        }
        return routesItem;
      }()
    }
  }

  // Set title
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getScreenProps().routes[navigation.state.routeName].title,
    };
  };

  openExo(routeId) {
    this.props.navigation.navigate(routeId);
  }


  render() {

    const Item = ({ item, onPress, style }) => (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.title}>Exo {item.num}: {item.title}</Text>
      </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
          onPress={() => this.openExo(item.id)}
        />
      );
    };


    const styles = StyleSheet.create({
      container: {

      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 24,
      },
    });


    return (
      <View style={styles.container} >
        <FlatList
          data={this.state.routes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}


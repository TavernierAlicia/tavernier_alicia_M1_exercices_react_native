import React, {useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Alert, Text} from 'react-native';


// Define List
const DATA=[
  {
    title: 'Exercice 1',
    action: 'HelloWorld',
  },
  {
    title: 'Exercice 2',
    action: 'CaptureTaps',
  },
  {
    title: 'Exercice 3',
    action: 'ComponentCustom',
  },
  {
    title: 'Exercice 4',
    action: 'StatesProps',
  },
  {
    title: 'Exercice 5',
    action: 'Styling',
  },
  {
    title: 'Exercice 6',
    action: 'Scrollable',
  },
  {
    title: 'Exercice 7',
    action: 'Form',
  },
  {
    title: 'Exercice 8',
    action: 'List',
  },
  {
    title: 'Exercice 9',
    action: 'API',
  },
  {
    title: 'Exercice 10',
    action: 'MultipleFiles',
  },
  {
    title: 'Exercice 11',
    action: 'ComponentClass',
  },
  {
    title: 'Exercice 12',
    action: 'Lifecycle',
  },
];


// Define item with touch opacity
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.item}>{item.title}</Text>
  </TouchableOpacity>
);


// Affect style
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 100,
  },
  item: {
    padding: 10,
    fontSize: 30,
    width: 300,
    paddingBottom: 15,
  },
  title: {
    paddingBottom: 10,
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});


// Display Component
const ListExos = () => {
  const [selectedId] = useState(null);

  const renderItem = ({ item, key }) => {
    const backgroundColor = key === selectedId ? "#D3D3D3" : "#ffffff";  
    return (
      <Item
        item={item}
        onPress={() => goTo(item.action)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Liste des exercices</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(_, key) => key.toString()}
      />
    </SafeAreaView>
  );
};

// Go to route
function goTo(action) {
  Alert.alert("Going to "+action);
}

export default ListExos;

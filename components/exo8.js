import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default class Exo8 extends React.Component {

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
      item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginHorizontal: 10,
        paddingLeft: 5,
        fontSize: 20,
      },
    });

    const Item = ({item}) => {

      return (
        <View style={styles.item} key={item.index.toString()}>
          <Text>{item.name}</Text>
        </View>
      );
    }

    return (
      <FlatList style={styles.container}
        data={userList}
        renderItem={Item}
        keyExtractor={item => item.index.toString()}>

      </FlatList>
    );

  }

}





const userList = [
  {
    "index": 0,
    "name": "Bernadine Watson"
  },
  {
    "index": 1,
    "name": "Deborah Britt"
  },
  {
    "index": 2,
    "name": "Weber Byrd"
  },
  {
    "index": 3,
    "name": "Ochoa Wolf"
  },
  {
    "index": 4,
    "name": "Elma Jacobs"
  },
  {
    "index": 5,
    "name": "Long Kane"
  },
  {
    "index": 6,
    "name": "Carr Mercado"
  },
  {
    "index": 7,
    "name": "Christina Mccoy"
  },
  {
    "index": 8,
    "name": "Lottie Durham"
  },
  {
    "index": 9,
    "name": "Sanchez Shaw"
  },
  {
    "index": 10,
    "name": "Scott Mcclure"
  },
  {
    "index": 11,
    "name": "Camacho Oneil"
  },
  {
    "index": 12,
    "name": "Simmons Conner"
  },
  {
    "index": 13,
    "name": "Grace Alexander"
  },
  {
    "index": 14,
    "name": "Zimmerman Franklin"
  },
  {
    "index": 15,
    "name": "Mills Lindsay"
  },
  {
    "index": 16,
    "name": "Lena Howard"
  },
  {
    "index": 17,
    "name": "Sharp Castro"
  },
  {
    "index": 18,
    "name": "Rosalie Fletcher"
  },
  {
    "index": 19,
    "name": "Bethany Morris"
  },
  {
    "index": 20,
    "name": "Diane Carroll"
  },
  {
    "index": 21,
    "name": "Malinda Chang"
  },
  {
    "index": 22,
    "name": "Johnnie Mooney"
  },
  {
    "index": 23,
    "name": "Cooper Beard"
  },
  {
    "index": 24,
    "name": "Estes Sherman"
  },
  {
    "index": 25,
    "name": "Randall Hernandez"
  },
  {
    "index": 26,
    "name": "Russo Rosa"
  },
  {
    "index": 27,
    "name": "Megan Bridges"
  },
  {
    "index": 28,
    "name": "Deanna England"
  },
  {
    "index": 29,
    "name": "Daugherty Smith"
  },
  {
    "index": 30,
    "name": "Horne Gardner"
  },
  {
    "index": 31,
    "name": "Lourdes Tillman"
  },
  {
    "index": 32,
    "name": "Bray Fernandez"
  },
  {
    "index": 33,
    "name": "Taylor Dunn"
  },
  {
    "index": 34,
    "name": "Dixie Macdonald"
  },
  {
    "index": 35,
    "name": "Carissa Donaldson"
  },
  {
    "index": 36,
    "name": "Wendi Mccarthy"
  },
  {
    "index": 37,
    "name": "Johns Nguyen"
  },
  {
    "index": 38,
    "name": "Stevenson Harmon"
  },
  {
    "index": 39,
    "name": "Odessa Walter"
  },
  {
    "index": 40,
    "name": "Mathis David"
  },
  {
    "index": 41,
    "name": "Aisha Hammond"
  },
  {
    "index": 42,
    "name": "Fitzgerald Jones"
  },
  {
    "index": 43,
    "name": "Katy Dotson"
  },
  {
    "index": 44,
    "name": "Monique Barker"
  },
  {
    "index": 45,
    "name": "Coleen Parker"
  },
  {
    "index": 46,
    "name": "Ava Guerrero"
  },
  {
    "index": 47,
    "name": "Ernestine Dalton"
  },
  {
    "index": 48,
    "name": "Carey Perkins"
  },
  {
    "index": 49,
    "name": "Mattie Delaney"
  },
  {
    "index": 50,
    "name": "Lupe Aguirre"
  },
  {
    "index": 51,
    "name": "Farmer Skinner"
  },
  {
    "index": 52,
    "name": "Pacheco Potts"
  },
  {
    "index": 53,
    "name": "Rosemary Heath"
  },
  {
    "index": 54,
    "name": "Angelique Rich"
  },
  {
    "index": 55,
    "name": "Jennings Elliott"
  },
  {
    "index": 56,
    "name": "Jodie William"
  },
  {
    "index": 57,
    "name": "Julie Sims"
  },
  {
    "index": 58,
    "name": "Nielsen Mueller"
  },
  {
    "index": 59,
    "name": "Tia Reynolds"
  },
  {
    "index": 60,
    "name": "Kitty Winters"
  },
  {
    "index": 61,
    "name": "Miranda Harrison"
  },
  {
    "index": 62,
    "name": "Crystal Schultz"
  },
  {
    "index": 63,
    "name": "Watson Singleton"
  },
  {
    "index": 64,
    "name": "Mckinney Buckner"
  },
  {
    "index": 65,
    "name": "Carlene Graves"
  },
  {
    "index": 66,
    "name": "Lawson Fischer"
  },
  {
    "index": 67,
    "name": "Jan Mason"
  },
  {
    "index": 68,
    "name": "Juarez Morales"
  },
  {
    "index": 69,
    "name": "Jacqueline Santiago"
  },
  {
    "index": 70,
    "name": "Rogers Brock"
  },
  {
    "index": 71,
    "name": "Johanna Kim"
  },
  {
    "index": 72,
    "name": "Eloise Patrick"
  },
  {
    "index": 73,
    "name": "Jaime Craig"
  },
  {
    "index": 74,
    "name": "Simpson Thomas"
  },
  {
    "index": 75,
    "name": "Glenna Leon"
  },
  {
    "index": 76,
    "name": "Perez Vaughn"
  },
  {
    "index": 77,
    "name": "Marks Berry"
  },
  {
    "index": 78,
    "name": "Butler Harrington"
  },
  {
    "index": 79,
    "name": "Alyssa Simpson"
  },
  {
    "index": 80,
    "name": "Dodson Mcfadden"
  },
  {
    "index": 81,
    "name": "Marion Hopper"
  },
  {
    "index": 82,
    "name": "Frances Avery"
  },
  {
    "index": 83,
    "name": "Lesley Cruz"
  },
  {
    "index": 84,
    "name": "Dollie Rowland"
  },
  {
    "index": 85,
    "name": "Tami York"
  },
  {
    "index": 86,
    "name": "England Lambert"
  },
  {
    "index": 87,
    "name": "Ashley Strickland"
  },
  {
    "index": 88,
    "name": "Blevins Manning"
  },
  {
    "index": 89,
    "name": "Paula Stein"
  },
  {
    "index": 90,
    "name": "Reba Knowles"
  },
  {
    "index": 91,
    "name": "Richardson Peck"
  },
  {
    "index": 92,
    "name": "Cara Hurst"
  },
  {
    "index": 93,
    "name": "Hewitt Collier"
  },
  {
    "index": 94,
    "name": "Briana Murray"
  },
  {
    "index": 95,
    "name": "Jordan Stevenson"
  },
  {
    "index": 96,
    "name": "Lorena Rivas"
  },
  {
    "index": 97,
    "name": "Parks Shelton"
  },
  {
    "index": 98,
    "name": "Burnett Cook"
  },
  {
    "index": 99,
    "name": "Shirley Daniels"
  }
]
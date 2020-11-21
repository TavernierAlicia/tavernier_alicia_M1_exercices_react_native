import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default class Exo9 extends React.Component {

	// instance
	constructor(props) {
		super(props);
		this.state = { userList: [] };
	}

	// set title
	static navigationOptions = ({ navigation }) => {
		const routeInfo = navigation.getScreenProps().routes[navigation.state.routeName];
		return {
			title: "Exo " + routeInfo.numExo + ": " + routeInfo.title,
		};
	};

	// oninit
	componentDidMount() {
		const api = 'https://randomuser.me/api/?results=100&inc=name';
		// https://randomuser.me/api/?results=100&inc=name IS FREQUENTLY BEEN DDOS
		fetch(api)
			.then((response) => response.json())
			.then((json) => {
				return this.setState({ userList: json.results });
			})
			.catch((error) => {
				console.log(error);
				console.error(error);
			})
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

		const Item = ({ item, key }) => {

			return (
				<View style={ styles.item } key={ key }>
					<Text>{ item.name.title } { item.name.first } { item.name.last } </Text>
				</View>
			);
		}

		return (
			<FlatList style={ styles.container }
				data={ this.state.userList }
				renderItem={ Item }
				keyExtractor={ (item, key) => key.toString() }>
			</FlatList>
		);
	}
}

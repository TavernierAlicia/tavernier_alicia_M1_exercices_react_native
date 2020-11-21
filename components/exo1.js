import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Exo1 extends React.Component {

	// instance
	constructor(props) {
		super(props);
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

	}

	// onclose
	componentWillUnmount() {

	}

	// render
	render() {


		const styles = StyleSheet.create({
			container: {
				height: 100,
				width: 100,
				backgroundColor: '#6af',
			},
			square: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			},
			text: {
				fontSize: 16,
			}
		});

		return (
			<View style={ styles.container } >
				<View style={ styles.square } >
					<Text>Hello, world!</Text>
				</View>
			</View>
		);
	}
}

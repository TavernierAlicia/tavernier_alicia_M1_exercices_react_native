import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyButton from './myButton';

export default class Exo10 extends React.Component {

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
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			},
		});

		return (
			<View style={ styles.container } >
				<MyButton title='the button' />
			</View>
		);
	}
}

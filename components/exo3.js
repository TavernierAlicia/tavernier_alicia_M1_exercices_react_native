import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default class Exo3 extends React.Component {

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

	clickAlert(content) {
		return Alert.alert(
			'Alert',
			content,
			[
				{ text: 'OK', onPress: () => { } }
			],
			{ cancelable: false }
		);
	}

	// render
	render() {

		const styles = StyleSheet.create({
			container: {
				flex: 1,
				alignItems: 'center',
				flexDirection: 'column',
			},
			btn: {
				width: 150,
				height: 50,
				backgroundColor: '#fba',
				marginVertical: 25,
			},
			btnText: {
				alignItems: "center",
				justifyContent: 'center',
				flex: 1,
			}
		});

		return (
			<View style={ styles.container }>
				<TouchableOpacity style={ styles.btn } onPress={ () => this.clickAlert('Hello') } >
					<View style={ styles.btnText }>
						<Text>Say Hello</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={ styles.btn } onPress={ () => this.clickAlert('GoodBye') } >
					<View style={ styles.btnText }>
						<Text>Say GoodBye</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

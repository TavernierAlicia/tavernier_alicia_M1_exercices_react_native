import React from 'react';
import { Snackbar } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from './myButton';

export default class Exo12 extends React.Component {

	// instance
	constructor(props) {
		super(props);
		this.state = { pressed: 0, snackIsVisible: false };
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
		this.setState({ pressed: 0, snackIsVisible: false });
	}

	// onclose
	componentWillUnmount() {
		this.setState({ pressed: 0, snackIsVisible: false });
	}

	pressMore() {
		this.setState({ pressed: this.state.pressed + 1, snackIsVisible: ((this.state.pressed + 1) % 15 == 0 && this.state.pressed) ? true : this.state.snackIsVisible });
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
			},
		});

		return (
			<View style={ styles.container }>
				<Text>You've pressed the buttons: { this.state.pressed } time(s).</Text>
				<MyButton title='Press me!' fn={ () => this.pressMore() } />
				<Snackbar
					visible={ this.state.snackIsVisible }
					duration={ 1000 }
					onDismiss={ () => this.setState({ pressed: this.state.pressed, snackIsVisible: false }) }
				> Waaaaw you pressed it so many times! </Snackbar>
			</View>
		);
	}
}

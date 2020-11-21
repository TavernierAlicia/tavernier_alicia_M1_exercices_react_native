// Common footer (Back button)

import React from 'react';
import { Text, View, Button, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';


export default class Footer extends React.Component {

	constructor(props) {
		super(props);
		this.navigation = props.navigation;
	}

	navigateTo(screen) {
		this.navigation.dispatch(
			NavigationActions.navigate({ routeName: screen })
		)
	}


	render() {

		return (
			<Button
				title="Retour menu"
				onPress={() => {
					this.navigateTo('Menu')
				}}
			/>
		);
	}
}
import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

class SideDrawer extends Component {
	render() {
		return (
			<View style={[styles.container, { width: Dimensions.get('window').width * 0.8 }]}>
				<Text> textInComponent </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 22,
		backgroundColor: 'white',
		flex: 1
	}
});

export default SideDrawer;

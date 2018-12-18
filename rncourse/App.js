import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/austin.jpg';

export default class App extends Component {
	state = {
		places: []
	};

	placeAddedHandler = placeName => {
		this.setState(prevState => {
			return {
				places: prevState.places.concat({
					key: Math.random(),
					name: placeName,
					image: placeImage
				})
			};
		});
	};

	placeDeletedHandler = key => {
		this.setState(prevState => {
			return {
				places: prevState.places.filter(place => {
					return place.key !== key;
				})
			};
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList
					places={this.state.places}
					onItemDeleted={this.placeDeletedHandler}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	inputContainer: {
		//flex: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	placeInput: {
		width: '70%'
	},
	placeButton: {
		width: '30%'
	},
	listContainer: {
		width: '100%'
	}
});

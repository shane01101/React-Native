import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
//import placeImage from './src/assets/austin.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
	state = {
		places: [],
		selectedPlace: null
	};

	placeAddedHandler = placeName => {
		this.setState(prevState => {
			return {
				places: prevState.places.concat({
					key: Math.random(),
					name: placeName,
					image: {
						uri:
							'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/5/d9/5d98d439-171f-5e9e-9b93-c8c08fe9bae2/5bcbee0ccae58.image.jpg?resize=400%2C277'
					}
				})
			};
		});
	};

	placeSelectedHandler = key => {
		this.setState(prevState => {
			return {
				selectedPlace: prevState.places.find(place => {
					return place.key == key;
				})
			};
		});
	};

	placeDeletedHandler = () => {
		this.setState(prevState => {
			return {
				places: prevState.places.filter(place => {
					return place.key !== prevState.selectedPlace.key;
				}),
				selectedPlace: null
			};
		});
	};

	modalClosedHandler = () => {
		this.setState({
			selectedPlace: null
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<PlaceDetail
					selectedPlace={this.state.selectedPlace}
					onItemDeleted={this.placeDeletedHandler}
					onModalClosed={this.modalClosedHandler}
				/>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList
					places={this.state.places}
					onItemSelected={this.placeSelectedHandler}
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

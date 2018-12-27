import {
	ADD_PLACE,
	DELETE_PLACE,
	SELECT_PLACE,
	DESELECT_PLACE
} from '../actions/actionTypes';

const inititalState = {
	places: [],
	selectedPlace: null
};

const reducer = (state = inititalState, action) => {
	switch (action.type) {
		case ADD_PLACE:
			return {
				...state,
				places: state.places.concat({
					key: Math.random(),
					name: action.placeName,
					image: {
						uri:
							'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/5/d9/5d98d439-171f-5e9e-9b93-c8c08fe9bae2/5bcbee0ccae58.image.jpg?resize=400%2C277'
					}
				})
			};
		case DELETE_PLACE:
			return {
				...state,
				places: state.places.filter(place => {
					return place.key !== state.selectedPlace.key;
				}),
				selectedPlace: null
			};
		case SELECT_PLACE:
			return {
				...state,
				selectedPlace: state.places.find(place => {
					return place.key == action.placeKey;
				})
			};
		case DESELECT_PLACE:
			return {
				...state,
				selectedPlace: null
			};
		default:
			return state;
	}
};

export default reducer;

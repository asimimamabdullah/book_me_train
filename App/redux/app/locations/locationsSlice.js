import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
	name: "location",
	initialState: {
		from: null,
		destination: null,
		currentLocation: null,
		currentRegion: null,
	},
	reducers: {
		setLocations: (state, action) => {
			state.from = action.payload.from;
			state.destination = action.payload.destination;
		},
		setCurrentLocation: (state, action) => {
			state.currentLocation = action.payload.coords;
			state.currentRegion = action.payload.region;
		},
	},
});

export const { setLocations, setCurrentLocation } = locationSlice.actions;

export default locationSlice.reducer;

export const selectLocationDetails = (state) => state.location;

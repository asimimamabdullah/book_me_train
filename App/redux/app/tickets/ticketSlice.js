import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
	name: "ticket",
	initialState: {
		myTickets: null,
	},
	reducers: {
		storeTickets: (state, action) => {
			state.myTickets = action.payload.tickets;
		},
		resetTickets: (state, action) => {
			state.myTickets = null;
		},
	},
});

export const { storeTickets, resetTickets } = ticketSlice.actions;

export default ticketSlice.reducer;

export const selectMyTickets = (state) => state.ticket;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;

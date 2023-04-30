import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MyTicketsCard from "../component/MyTicketsCard";
import { useDispatch, useSelector } from "react-redux";
import {
	selectCurrentToken,
	selectCurrentUser,
} from "../redux/app/auth/authSlice";
import { storeTickets } from "../redux/app/tickets/ticketSlice";

const MyTickets = ({ navigation }) => {
	const [errorMsg, setErrorMsg] = useState(null);
	const [tickets, setTickets] = useState([]);
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectCurrentToken);
	const dispatch = useDispatch();

	const getTickets = async () => {
		try {
			const auth = {
				headers: { Authorization: `Bearer ${token}` },
			};

			const res = await axios.get(
				`https://backend-bookmetrain-production.up.railway.app/api/ticket/${user._id}`,
				auth,
			);

			dispatch(storeTickets({ tickets: res.data.tickets }));
			setTickets(res.data.tickets);
		} catch (error) {
			console.log("error: ", error);
			setErrorMsg(error?.error || error);
		}
	};
	useEffect(() => {
		if (token) {
			getTickets();
		}
	}, [token]);
	return (
		<ScrollView style={{ padding: 20, gap: 10 }}>
			{tickets?.map((item, index) => (
				<MyTicketsCard navigation={navigation} item={item} key={index} />
			))}
		</ScrollView>
	);
};

export default MyTickets;

const styles = StyleSheet.create({});

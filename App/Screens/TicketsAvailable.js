import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import TicketsAvailableCard from "../component/TicketsAvailableCard";

const TicketsAvailable = ({ navigation, route }) => {
	const { type } = route.params;
	const tickets = [
		{
			startTime: "09:05",
			endTime: "10:55",
			price: "38.5",
			date: "Today",
			ticketType: type,
		},
		{
			startTime: "11:25",
			endTime: "13:45",
			price: "41.5",
			date: "Today",
			ticketType: type,
		},
		{
			startTime: "14:05",
			endTime: "16:15",
			price: "35.00",
			date: "Today",
			ticketType: type,
		},
		{
			startTime: "16:35",
			endTime: "17:02",
			price: "36.06",
			date: "Today",
			ticketType: type,
		},
		{
			startTime: "09:05",
			endTime: "10:55",
			price: "31.00",
			date: "Tomorrow",
			ticketType: type,
		},
		{
			startTime: "11:25",
			endTime: "13:45",
			price: "32.7",
			date: "Tomorrow",
			ticketType: type,
		},
		{
			startTime: "16:05",
			endTime: "17:55",
			price: "28.5",
			date: "Tomorrow",
			ticketType: type,
		},
	];
	return (
		<ScrollView>
			{tickets?.map((item, index) => (
				<TicketsAvailableCard
					item={item}
					key={index}
					navigation={navigation}
				/>
			))}
			{/* <TicketsAvailableCard />
			<TicketsAvailableCard />
			<TicketsAvailableCard /> */}
		</ScrollView>
	);
};

export default TicketsAvailable;

const styles = StyleSheet.create({});

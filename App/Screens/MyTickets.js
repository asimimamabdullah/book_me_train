import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MyTicketsCard from "../component/MyTicketsCard";

const MyTickets = ({ navigation }) => {
	return (
		<ScrollView style={{ padding: 20, gap: 10 }}>
			<MyTicketsCard navigation={navigation} />
			<MyTicketsCard navigation={navigation} />
			<MyTicketsCard navigation={navigation} />
			<MyTicketsCard navigation={navigation} />
			<MyTicketsCard navigation={navigation} />
			<MyTicketsCard navigation={navigation} />
			<MyTicketsCard navigation={navigation} />
		</ScrollView>
	);
};

export default MyTickets;

const styles = StyleSheet.create({});

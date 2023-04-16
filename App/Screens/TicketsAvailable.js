import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TicketsAvailableCard from "../component/TicketsAvailableCard";

const TicketsAvailable = () => {
	return (
		<View>
			<TicketsAvailableCard />
			<TicketsAvailableCard />
			<TicketsAvailableCard />
			<TicketsAvailableCard />
		</View>
	);
};

export default TicketsAvailable;

const styles = StyleSheet.create({});

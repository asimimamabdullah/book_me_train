import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TicketDetails = () => {
	return (
		<View>
			<View
				style={{
					flexDirection: "row",
					padding: 20,
					backgroundColor: "#fff",
					gap: 25,
					alignItems: "center",
					borderBottomColor: "#dddddd",
					borderBottomWidth: 1,
				}}>
				<View style={{ alignItems: "center" }}>
					<Text style={{ fontSize: 13, color: "#bbbbbb" }}>OCT</Text>
					<Text style={{ fontSize: 16, fontWeight: 500 }}>27</Text>
				</View>
				<Text>Manchester</Text>
			</View>

			<View
				style={{
					padding: 20,
					backgroundColor: "#fff",
					gap: 5,
					borderBottomColor: "#dddddd",
					borderBottomWidth: 1,
				}}>
				<Text>Saturday, October 22 at 2PM</Text>
				<Text style={{ fontSize: 13, color: "#bbbbbb" }}>Single</Text>
			</View>

			<View
				style={{
					padding: 20,
					backgroundColor: "#fff",
					gap: 5,
					borderBottomColor: "#ddd",
					borderBottomWidth: 1,
				}}>
				<Text>Location</Text>
				<Text style={{ fontSize: 13, color: "#bbbbbb" }}>
					Address Line 1, City, NW5782
				</Text>
			</View>

			<View
				style={{
					paddingVertical: 30,
					paddingHorizontal: 20,
					backgroundColor: "#fff",
					gap: 30,
				}}>
				<Text style={{ color: "#bbbbbb" }}>Details</Text>
				<Text>
					Lorem ipsum Text Lorem ipsum Text Lorem ipsum Text Lorem ipsum
					Text Lorem ipsum Text Lorem ipsum Text Lorem ipsum Text Lorem
					ipsum Text Lorem ipsum Text{" "}
				</Text>
			</View>
		</View>
	);
};

export default TicketDetails;

const styles = StyleSheet.create({});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MyTicketsCard = ({ navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("TicketDetails")}
			style={{
				flexDirection: "row",
				backgroundColor: "#ffffff",
				padding: 20,
				borderRadius: 5,
				marginBottom: 10,
			}}>
			<View
				style={{
					// padding: 20,
					paddingRight: 20,
					borderRightWidth: 1,
					borderRightColor: "#dddddd",
				}}>
				<Text>APR 27</Text>
				<Text>FRI</Text>
			</View>
			<View style={{ gap: 3, paddingLeft: 20, flex: 1 }}>
				<View>
					<Text>Birmingham {"->"} Manchester</Text>
					<Text>Manchester {"->"} Birmingham</Text>
				</View>
				<Text style={{ color: "#ccc" }}>Ticket 3341</Text>
				<View
					style={{
						backgroundColor: "rgb(104,112,137)",
						paddingVertical: 5,
						paddingHorizontal: 25,
						// justifyContent: "flex-end",
						alignSelf: "flex-end",
						marginTop: 10,
						borderRadius: 5,
					}}>
					<Text
						style={{
							textAlign: "center",
							textAlignVertical: "center",
							color: "#ffffff",
						}}>
						Single
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default MyTicketsCard;

const styles = StyleSheet.create({});

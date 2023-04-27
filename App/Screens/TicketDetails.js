import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectLocationDetails } from "../redux/app/locations/locationsSlice";

const TicketDetails = ({ navigation, route }) => {
	const currentLocation = useSelector(selectLocationDetails);
	const item = route.params.item;

	return (
		<View style={{ flex: 1 }}>
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
					<Text style={{ fontSize: 13, color: "#bbbbbb" }}>
						{item?.month}
					</Text>
					<Text style={{ fontSize: 16, fontWeight: 500 }}>
						{item?.monthDate}
					</Text>
				</View>
				<Text>{item?.destination}</Text>
			</View>

			<View
				style={{
					padding: 20,
					backgroundColor: "#fff",
					gap: 5,
					borderBottomColor: "#dddddd",
					borderBottomWidth: 1,
				}}>
				<Text>{`${new Date(item?.exactDate)
					.toDateString()
					.substring(0, 11)} ${item?.startTime}`}</Text>
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
					{`${currentLocation.currentRegion?.street} ${currentLocation.currentRegion?.streetNumber}, ${currentLocation.currentRegion?.city}, ${currentLocation.currentRegion?.postalCode} `}
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

			{/* <View
				style={{
					padding: 20,
					backgroundColor: "#fff",
					position: "absolute",
					bottom: 0,
					right: 0,
					left: 0,
				}}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Booked")}
					style={{
						paddingVertical: 15,
						paddingHorizontal: 20,
						backgroundColor: "rgb(104,112,137)",
						borderRadius: 5,
					}}>
					<Text
						style={{
							color: "#ffffff",
							textAlign: "center",
							fontSize: 16,
						}}>
						Book Now
					</Text>
				</TouchableOpacity>
			</View> */}
		</View>
	);
};

export default TicketDetails;

const styles = StyleSheet.create({});

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import EventDetailsCard from "../component/EventDetailsCard";
import { seat_64, user_64 } from "../../assets/icons";

const EventDetails = () => {
	return (
		<View style={{ gap: 10, flex: 1 }}>
			<View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
				<EventDetailsCard />
			</View>
			{/* details  */}
			<View style={{ paddingHorizontal: 20 }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						padding: 20,
						backgroundColor: "rgb(246,247,248)",
						borderBottomColor: "#cccccc",
						borderBottomWidth: 1,
					}}>
					<Text style={{ fontSize: 15, letterSpacing: 0.1 }}>Window</Text>
					<Image source={seat_64} style={{ width: 32, height: 32 }} />
				</View>

				<View
					style={{
						justifyContent: "space-between",
						flexDirection: "row",
						padding: 20,
						backgroundColor: "rgb(246,247,248)",
					}}>
					<Text style={{ fontSize: 15, letterSpacing: 0.1 }}>1 Adult</Text>
					<Image source={user_64} style={{ width: 32, height: 32 }} />
				</View>
			</View>

			<View
				style={{
					backgroundColor: "#ffffff",
					padding: 10,
					bottom: 0,
					position: "absolute",
					right: 0,
					left: 0,
				}}>
				<TouchableOpacity
					style={{
						backgroundColor: "rgb(104,112,137)",
						borderRadius: 20,
						paddingVertical: 10,
						paddingHorizontal: 20,
					}}>
					<Text
						style={{
							fontSize: 16,
							color: "#ffffff",
							textAlign: "center",
						}}>
						Book
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default EventDetails;

const styles = StyleSheet.create({});

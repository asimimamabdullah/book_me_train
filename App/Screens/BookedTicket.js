import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { accept } from "../../assets/icons";

const BookedTicket = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{
				// justifyContent: "center",
				alignItems: "center",
				gap: 30,
				flex: 1,
				paddingTop: 30,
			}}>
			<Image source={accept} style={{ width: 130, height: 130 }} />
			<Text style={{ fontSize: 20, fontWeight: 600 }}>Ticket Booked</Text>

			<View
				style={{
					position: "absolute",
					left: 0,
					bottom: 0,
					right: 0,
					backgroundColor: "#fff",
					padding: 20,
				}}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Home")}
					style={{
						backgroundColor: "rgb(104,112,137)",
						paddingVertical: 15,
						paddingHorizontal: 30,
						borderRadius: 5,
					}}>
					<Text
						style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
						See more
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default BookedTicket;

const styles = StyleSheet.create({});

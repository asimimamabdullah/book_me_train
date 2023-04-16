import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TicketsAvailableCard = () => {
	return (
		<View style={{ backgroundColor: "#ffffff" }}>
			<View
				style={{
					backgroundColor: "rgb(104,112,137)",
					paddingHorizontal: 20,
					paddingVertical: 10,
				}}>
				<Text style={{ color: "#fff" }}>Today, Thu Oct 13</Text>
			</View>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 20,
					paddingHorizontal: 20,
					paddingVertical: 20,
				}}>
				<View style={{}}>
					<Text style={{ fontWeight: 600, fontSize: 16 }}>£ 38.50</Text>
				</View>
				<View>
					<Text style={{ fontWeight: 500 }}>16:01</Text>
					<Text
						style={{ fontSize: 14, fontWeight: 400, color: "#bbbbbb" }}>
						Birmingham
					</Text>
					<Text
						style={{ color: "#bbbbbb", fontSize: 14, fontWeight: 400 }}>
						new street
					</Text>
				</View>

				<Text style={{ fontSize: 20 }}>{"->"}</Text>

				<View>
					<Text style={{ fontWeight: 500 }}>17:29</Text>
					<Text
						style={{ color: "#bbbbbb", fontSize: 14, fontWeight: 400 }}>
						Manchester
					</Text>
					<Text
						style={{ color: "#bbbbbb", fontSize: 14, fontWeight: 400 }}>
						Piccadily
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default TicketsAvailableCard;

const styles = StyleSheet.create({});

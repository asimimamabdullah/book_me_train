import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { calender_64, user_64 } from "../../assets/icons";

const Single = () => {
	return (
		<View style={{ flex: 1, backgroundColor: "#ffffff", gap: 40 }}>
			<View>
				<View
					style={{
						backgroundColor: "rgb(250,250,250)",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						padding: 20,
						borderBottomWidth: 1,
						borderColor: "#cccccc",
					}}>
					<Text
						style={{ fontSize: 16, fontWeight: 500, letterSpacing: 0.2 }}>
						Outbound
					</Text>
					<Image source={calender_64} style={{ width: 28, height: 28 }} />
				</View>
				<View
					style={{
						backgroundColor: "rgb(250,250,250)",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						padding: 20,
					}}>
					<Text
						style={{ fontSize: 16, fontWeight: 500, letterSpacing: 0.2 }}>
						1 adult
					</Text>
					<Image source={user_64} style={{ width: 28, height: 28 }} />
				</View>
			</View>

			<View style={{ paddingHorizontal: 35 }}>
				<TouchableOpacity
					style={{
						padding: 20,
						backgroundColor: "rgb(104,112,137)",
						borderRadius: 8,
					}}>
					<Text
						style={{
							color: "#ffffff",
							textAlign: "center",
							fontSize: 16,
							fontWeight: 400,
							letterSpacing: 0.2,
						}}>
						Find Tickets
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Single;

const styles = StyleSheet.create({});

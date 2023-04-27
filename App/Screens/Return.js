import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { calender_64, user_64 } from "../../assets/icons";
import { useSelector } from "react-redux";
import { selectLocationDetails } from "../redux/app/locations/locationsSlice";

const Return = ({ navigation }) => {
	const [errMsg, setErrMsg] = useState(null);
	const locations = useSelector(selectLocationDetails);
	useEffect(() => {
		if (errMsg) {
			setTimeout(() => {
				setErrMsg(null);
			}, 3000);
		}
	}, [errMsg]);

	return (
		<View style={{ flex: 1, backgroundColor: "#ffffff", gap: 40 }}>
			{errMsg ? (
				<View
					style={{
						backgroundColor: "red",
						position: "absolute",
						top: 50,
						left: 75,
						paddingVertical: 15,
						paddingHorizontal: 30,
						zIndex: 99,
					}}>
					<Text style={{ color: "#fff", fontSize: 16 }}>{errMsg}</Text>
				</View>
			) : null}
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
					onPress={() =>
						locations.destination.length > 3
							? navigation.navigate("TicketsAvailable", {
									type: "Return",
							  })
							: setErrMsg("Please select destination")
					}
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

export default Return;

const styles = StyleSheet.create({});

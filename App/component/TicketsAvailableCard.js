import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { selectLocationDetails } from "../redux/app/locations/locationsSlice";

const TicketsAvailableCard = ({ item, navigation }) => {
	const locations = useSelector(selectLocationDetails);
	const today = useRef(new Date(Date.now()));
	const days = useRef(["Sunday", "Monday", "Tue", "Wed", "Thu", "Fri", "Sat"]);
	const Months = useRef([
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]);
	// console.log("today: ", today.current.toDateString());
	return (
		<View style={{ backgroundColor: "#ffffff" }}>
			<View
				style={{
					backgroundColor: "rgb(104,112,137)",
					paddingHorizontal: 20,
					paddingVertical: 10,
				}}>
				{item?.date === "Today" ? (
					<Text style={{ color: "#fff" }}>
						{item?.date},{" "}
						{`${days.current[today.current?.getDay()]} ${
							Months.current[today.current?.getMonth()]
						} ${today.current?.getDate()}`}
					</Text>
				) : (
					<Text style={{ color: "#fff" }}>
						{item?.date},{" "}
						{`${days.current[today.current?.getDay() + 1]} ${
							Months.current[today.current?.getMonth() + 1]
						} ${today.current?.getDate() + 1}`}
					</Text>
				)}
			</View>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("EventDetails", {
						item: {
							...item,
							month:
								item.date === "Today"
									? Months.current[today.current?.getMonth()]
									: Months.current[today.current?.getMonth() + 1],
							monthDate:
								item.date === "Today"
									? today.current?.getDate()
									: today.current?.getDate() + 1,
							destination: locations.destination,
							from: locations.from,
							exactDate: today.current.toDateString(),
							ticketNumber: Math.floor(Math.random() * 10000),
						},
					})
				}
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 20,
					paddingHorizontal: 20,
					paddingVertical: 20,
				}}>
				<View style={{}}>
					<Text style={{ fontWeight: 600, fontSize: 16 }}>
						£ {item?.price}
					</Text>
				</View>
				<View>
					<Text style={{ fontWeight: 500 }}>{item.startTime}</Text>
					<Text
						style={{ fontSize: 14, fontWeight: 400, color: "#bbbbbb" }}>
						{locations?.from}
					</Text>
					<Text
						style={{ color: "#bbbbbb", fontSize: 14, fontWeight: 400 }}>
						new street
					</Text>
				</View>

				<Text style={{ fontSize: 20 }}>{"->"}</Text>

				<View>
					<Text style={{ fontWeight: 500 }}>{item?.endTime}</Text>
					<Text
						style={{ color: "#bbbbbb", fontSize: 14, fontWeight: 400 }}>
						{locations?.destination}
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

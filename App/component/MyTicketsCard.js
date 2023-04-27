import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";

const MyTicketsCard = ({ navigation, item }) => {
	const date = useRef(new Date(item?.exactDate).toDateString());

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("TicketDetails", { item })}
			style={{
				flexDirection: "row",
				backgroundColor: "#ffffff",
				padding: 20,
				borderRadius: 5,
				marginBottom: 10,
			}}>
			<View
				style={{
					paddingRight: 20,
					borderRightWidth: 1,
					borderRightColor: "#dddddd",
				}}>
				<Text>
					{`${date.current
						.substring(4, 8)
						.toUpperCase()} ${date.current.substring(8, 11)}`}
				</Text>
				<Text>{`${date.current.substring(0, 4)}`}</Text>
			</View>
			<View style={{ gap: 3, paddingLeft: 20, flex: 1 }}>
				<View>
					<Text>
						{item?.from} {"->"} {item?.destination}
					</Text>
					{item?.ticketType === "Return" ? (
						<Text>Manchester {"->"} Birmingham</Text>
					) : null}
				</View>
				<Text style={{ color: "#ccc" }}>Ticket {item?.ticketNumber}</Text>
				<View
					style={{
						backgroundColor: "rgb(104,112,137)",
						paddingVertical: 5,
						paddingHorizontal: 25,
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
						{item?.ticketType}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default MyTicketsCard;

const styles = StyleSheet.create({});

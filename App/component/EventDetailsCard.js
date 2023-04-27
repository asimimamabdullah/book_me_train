import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EventDetailsCard = ({ item }) => {
	return (
		<View
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
				<Text style={{ fontWeight: 500, fontSize: 15 }}>
					{item.exactDate?.substring(4, 8)}
				</Text>
				<Text style={{ color: "#bbbbbb", fontSize: 14 }}>
					{item.exactDate?.substring(8, 11)}
				</Text>
			</View>
			<View style={{ gap: 3, paddingLeft: 20, flex: 1 }}>
				<View>
					<Text style={{ fontSize: 16, fontWeight: 400 }}>
						{item?.from} {"->"} {item?.destination}
					</Text>
					{item?.ticketType === "Return" && (
						<Text style={{ fontSize: 16, fontWeight: 400 }}>
							{item?.destination} {"->"} {item?.from}
						</Text>
					)}
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: 10,
					}}>
					<Text style={{ color: "#ccc" }}>Ticket 3341</Text>
					<View
						style={{
							backgroundColor: "rgb(104,112,137)",
							paddingVertical: 5,
							paddingHorizontal: 25,
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
			</View>
		</View>
	);
};

export default EventDetailsCard;

const styles = StyleSheet.create({});

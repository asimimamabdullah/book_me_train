import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import EventDetailsCard from "../component/EventDetailsCard";
import { seat_64, user_64 } from "../../assets/icons";
import { useSelector } from "react-redux";
import {
	selectCurrentToken,
	selectCurrentUser,
} from "../redux/app/auth/authSlice";
import axios from "axios";

const EventDetails = ({ navigation, route }) => {
	const [errorMsg, setErrorMsg] = useState(null);
	const token = useSelector(selectCurrentToken);
	const user = useSelector(selectCurrentUser);
	const { item } = route.params;

	useEffect(() => {
		setTimeout(() => {
			setErrorMsg(null);
		}, 3000);
	}, [errorMsg]);

	const handleBook = async () => {
		if (token) {
			try {
				const auth = {
					headers: { Authorization: `Bearer ${token}` },
				};

				const res = await axios.post(
					`http://10.0.2.2:3000/api/ticket`,
					{
						item: {
							...item,
							user_id: user._id,
						},
					},
					auth,
				);

				navigation.navigate("Booked");
			} catch (error) {
				setErrorMsg(error?.error || error);
			}
		} else setErrorMsg("Please Login to continue");
	};
	return (
		<View style={{ gap: 10, flex: 1 }}>
			{errorMsg && (
				<View
					style={{
						position: "absolute",
						top: 30,
						flexDirection: "row",
						zIndex: 5,
						marginHorizontal: 20,
					}}>
					<View
						style={{
							flex: 1,
							backgroundColor: "red",
							paddingVertical: 15,
							paddingHorizontal: 20,
						}}>
						<Text
							style={{
								color: "#fff",
								fontSize: 16,
								fontWeight: 600,
								textAlign: "center",
							}}>
							{errorMsg}
						</Text>
					</View>
				</View>
			)}
			<View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
				<EventDetailsCard item={item} />
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
					onPress={handleBook}
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

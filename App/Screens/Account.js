import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { userFilled100 } from "../../assets/icons";
import { StatusBar } from "expo-status-bar";

const Account = () => {
	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					backgroundColor: "rgb(104,112,137)",
					justifyContent: "center",
					alignItems: "center",
					paddingVertical: 30,
				}}>
				<View
					style={{
						borderWidth: 2,
						borderColor: "#ffffff",
						padding: 15,
						borderRadius: 60,
					}}>
					<Image
						source={userFilled100}
						style={{ width: 64, height: 64, tintColor: "#ffffff" }}
					/>
				</View>
			</View>

			<View
				style={{
					paddingVertical: 10,
					paddingHorizontal: 20,
					backgroundColor: "rgb(239,241,248)",
				}}>
				<Text
					style={{
						color: "#aaaaaa",
						fontWeight: 500,
						letterSpacing: 0.2,
					}}>
					PROFILE
				</Text>
			</View>
			<View style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}>
				<View
					style={{
						flexDirection: "row",
						paddingVertical: 15,
						justifyContent: "space-between",
						borderBottomColor: "#eeee",
						borderBottomWidth: 1,
					}}>
					<Text
						style={{ fontWeight: 500, letterSpacing: 0.1, fontSize: 15 }}>
						Username
					</Text>
					<Text style={{ color: "#aaaaaa" }}>Dave12</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						paddingVertical: 15,
						justifyContent: "space-between",
						borderBottomColor: "#eeee",
						borderBottomWidth: 1,
					}}>
					<Text
						style={{ fontWeight: 500, letterSpacing: 0.1, fontSize: 15 }}>
						First name
					</Text>
					<Text style={{ color: "#aaaaaa" }}>Dave</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						paddingVertical: 15,
						justifyContent: "space-between",
						borderBottomColor: "#eeee",
						borderBottomWidth: 1,
					}}>
					<Text
						style={{ fontWeight: 500, letterSpacing: 0.1, fontSize: 15 }}>
						Last name
					</Text>
					<Text style={{ color: "#aaaaaa" }}>Anthony</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						paddingVertical: 15,
						justifyContent: "space-between",
					}}>
					<Text
						style={{ fontWeight: 500, letterSpacing: 0.1, fontSize: 15 }}>
						Email
					</Text>
					<Text style={{ color: "#aaaaaa" }}>annie.larson@gmail.com</Text>
				</View>
			</View>

			<View
				style={{
					paddingVertical: 10,
					paddingHorizontal: 20,
					backgroundColor: "rgb(239,241,248)",
				}}>
				<Text
					style={{
						color: "#aaaaaa",
						fontWeight: 500,
						letterSpacing: 0.2,
					}}>
					ACCOUNT
				</Text>
			</View>

			<TouchableOpacity
				style={{
					paddingHorizontal: 20,
					paddingVertical: 15,
					backgroundColor: "#fff",
				}}>
				<Text style={{ fontSize: 15, fontWeight: 400, letterSpacing: 0.1 }}>
					Change Password
				</Text>
			</TouchableOpacity>

			<StatusBar style="light" />
		</View>
	);
};

export default Account;

const styles = StyleSheet.create({});

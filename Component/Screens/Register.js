import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
	const [registerDetails, setRegisterDetails] = useState({
		email: "",
		password: "",
		repeatPassword: "",
	});
	return (
		<SafeAreaView
			style={{
				justifyContent: "space-around",
				paddingHorizontal: 15,
				flex: 1,
			}}>
			<View style={{ alignItems: "center" }}></View>

			<View style={{ gap: 10 }}>
				<TextInput
					value={registerDetails?.email | ""}
					placeholder="Email*"
					placeholderTextColor="#aaaaaa"
					onChangeText={(email) =>
						setRegisterDetails((old) => ({ ...old, email: email }))
					}
					style={{
						borderRadius: 5,
						backgroundColor: "#fff",
						paddingVertical: 10,
						paddingHorizontal: 20,
					}}
				/>
				<TextInput
					value={registerDetails?.password | ""}
					placeholder="Choose Password*"
					placeholderTextColor="#aaaaaa"
					onChangeText={(pass) =>
						setRegisterDetails((old) => ({ ...old, password: pass }))
					}
					style={{
						borderRadius: 5,
						backgroundColor: "#fff",
						paddingVertical: 10,
						paddingHorizontal: 20,
					}}
				/>

				<TextInput
					value={registerDetails?.repeatPassword | ""}
					placeholder="Repeat Password*"
					placeholderTextColor="#aaaaaa"
					onChangeText={(pass) =>
						setRegisterDetails((old) => ({
							...old,
							repeatPassword: pass,
						}))
					}
					style={{
						borderRadius: 5,
						backgroundColor: "#fff",
						paddingVertical: 10,
						paddingHorizontal: 20,
					}}
				/>
			</View>

			{/* buttons and bottom things */}
			<View style={{ gap: 20 }}>
				<View>
					<Text style={{ color: "rgb(170,175,191)", textAlign: "center" }}>
						By proceeding you also agree to the Terms of Service and
						Privacy Policy
					</Text>
				</View>
				<TouchableOpacity
					style={{
						borderRadius: 25,
						backgroundColor: "rgb(104,112,137)",
						paddingVertical: 10,
						paddingHorizontal: 20,
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Text style={{ fontSize: 16, color: "#fff" }}>Sign In</Text>
				</TouchableOpacity>

				<TouchableOpacity style={{ alignItems: "center" }}>
					<Text style={{ color: "rgb(170,175,191)" }}>
						Already have an account? Sign in
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Register;

const styles = StyleSheet.create({});

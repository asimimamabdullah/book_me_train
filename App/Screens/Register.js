import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRegisterMutation } from "../redux/app/auth/register";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCredentials } from "../redux/app/auth/authSlice";

const Register = ({ navigation }) => {
	const [registerDetails, setRegisterDetails] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [register, { loading }] = useRegisterMutation();
	const dispatch = useDispatch();

	const handleRegister = async () => {
		try {
			const userData = await register({ ...registerDetails }).unwrap();
			await AsyncStorage.setItem("token", userData.accessToken);

			dispatch(setCredentials({ ...userData }));
			navigation.navigate("Home");
		} catch (error) {
			console.log("error register: ", error);
			setErrMsg(error?.data?.message);
		}
	};

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
					value={registerDetails?.name | ""}
					placeholder="Full name*"
					placeholderTextColor="#aaaaaa"
					onChangeText={(name) =>
						setRegisterDetails((old) => ({
							...old,
							name: name,
						}))
					}
					style={{
						borderRadius: 5,
						backgroundColor: "#fff",
						paddingVertical: 10,
						paddingHorizontal: 20,
					}}
				/>

				<TextInput
					value={registerDetails?.email}
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
					value={registerDetails?.password}
					placeholder="Choose Password*"
					placeholderTextColor="#aaaaaa"
					secureTextEntry={true}
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
					onPress={handleRegister}
					style={{
						borderRadius: 25,
						backgroundColor: "rgb(104,112,137)",
						paddingVertical: 10,
						paddingHorizontal: 20,
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Text style={{ fontSize: 16, color: "#fff" }}>Sign Up</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate("Login")}
					style={{ alignItems: "center" }}>
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

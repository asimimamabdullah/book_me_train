import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLoginMutation } from "../redux/app/auth/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/app/auth/authSlice";

const Login = ({ navigation }) => {
	const [loginDetails, setLoginDetails] = useState({
		email: "",
		password: "",
	});
	const [errMsg, setErrMsg] = useState(null);
	const dispatch = useDispatch();
	const [login, { loading }] = useLoginMutation();

	const handleSubmit = async () => {
		try {
			const userData = await login({
				...loginDetails,
			}).unwrap();

			await AsyncStorage.setItem("token", userData?.accessToken);

			dispatch(
				setCredentials({
					...userData,
				}),
			);
			navigation.navigate("Home");
		} catch (err) {
			setErrMsg(err?.data?.error);
		}
	};
	return (
		<SafeAreaView
			style={{
				justifyContent: "space-around",
				paddingHorizontal: 15,
				flex: 1,
			}}>
			<View style={{ alignItems: "center" }}>
				<Text style={{ fontSize: 18, fontWeight: 500 }}>Sign In</Text>
				<Text style={{ fontSize: 18, fontWeight: 500 }}>BookMeTrain</Text>
			</View>

			<View style={{ gap: 10 }}>
				<TextInput
					value={loginDetails?.email}
					placeholder="Email*"
					placeholderTextColor="#bbbbbb"
					onChangeText={(email) =>
						setLoginDetails((old) => ({ ...old, email: email }))
					}
					style={{
						borderRadius: 5,
						backgroundColor: "#fff",
						paddingVertical: 10,
						paddingHorizontal: 20,
					}}
				/>
				<TextInput
					value={loginDetails?.password}
					placeholder="Password*"
					placeholderTextColor="#bbbbbb"
					secureTextEntry={true}
					onChangeText={(pass) =>
						setLoginDetails((old) => ({ ...old, password: pass }))
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
			<View style={{ gap: 15 }}>
				<TouchableOpacity
					onPress={handleSubmit}
					style={{
						borderRadius: 25,
						backgroundColor: "rgb(104,112,137)",
						paddingVertical: 12,
						paddingHorizontal: 20,
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Text style={{ fontSize: 16, color: "#fff" }}>Sign In</Text>
				</TouchableOpacity>
				<Text
					style={{
						color: "rgb(170,175,191)",
						textAlign: "center",
						fontSize: 20,
					}}>
					OR
				</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate("Register")}
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 25,
						paddingHorizontal: 20,
						paddingVertical: 12,
						backgroundColor: "rgb(104,112,137)",
					}}>
					<Image
						style={{
							width: 18,
							height: 18,
							position: "absolute",
							top: 2,
							left: 15,
						}}
					/>
					<Text
						style={{
							fontSize: 16,
							color: "#ffffff",
							textAlign: "center",
						}}>
						Sign in with Facebook
					</Text>
				</TouchableOpacity>

				<View>
					<Text style={{ color: "rgb(170,175,191)", textAlign: "center" }}>
						By proceeding you also agree to the Terms of Service and
						Privacy Policy
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Login;

const styles = StyleSheet.create({});

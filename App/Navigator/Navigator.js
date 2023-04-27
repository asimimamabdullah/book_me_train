import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";
import {
	selectLocationDetails,
	setCurrentLocation,
} from "../redux/app/locations/locationsSlice";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Tabs from "../BottomNavigation/Tabs";
import EventDetails from "../Screens/EventDetails";
import TicketsAvailable from "../Screens/TicketsAvailable";
import TicketDetails from "../Screens/TicketDetails";
import BookedTicket from "../Screens/BookedTicket";
import { leftArrow64 } from "../../assets/icons";

const Stack = createNativeStackNavigator();

const Navigator = () => {
	const [errMsg, setErrorMsg] = useState(null);
	const locations = useSelector(selectLocationDetails);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			let regionFound = await Location.reverseGeocodeAsync({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			});

			dispatch(
				setCurrentLocation({
					coords: location?.coords,
					region: regionFound[0],
				}),
			);
			// findLocation.current = location.coords;
			// regionName.current = regionFound;
			// setCallback(!callback);

			// setLocation({ location: location.coords, regionName });
		})();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="BottomTabs">
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						headerBackButtonMenuEnabled: true,
						headerBackVisible: true,
						headerBackImageSource: leftArrow64,
						headerTitleAlign: "center",
						headerTintColor: "#fff",
						headerStyle: { backgroundColor: "rgb(104,112,137)" },
					}}
				/>
				<Stack.Screen
					name="Register"
					component={Register}
					options={{
						headerBackButtonMenuEnabled: true,
						headerBackVisible: true,
						headerBackImageSource: leftArrow64,
						headerTitleAlign: "center",
						headerTintColor: "#ffffff",
						headerStyle: { backgroundColor: "rgb(104,112,137)" },
					}}
				/>

				<Stack.Screen
					name="BottomTabs"
					component={Tabs}
					options={{
						headerBackButtonMenuEnabled: false,
						headerBackVisible: false,
						headerTitle: "Find Tickets",
						headerTitleAlign: "center",
						headerTintColor: "#ffffff",
						headerStyle: { backgroundColor: "rgb(104,112,137)" },
						headerShadowVisible: false,
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="EventDetails"
					component={EventDetails}
					options={{
						headerBackButtonMenuEnabled: true,
						headerBackVisible: true,
						headerBackImageSource: leftArrow64,
						headerTitleAlign: "center",
						headerTintColor: "#ffffff",
						headerStyle: { backgroundColor: "rgb(104,112,137)" },
					}}
				/>

				<Stack.Screen
					name="TicketsAvailable"
					component={TicketsAvailable}
					options={{
						headerTitle: `${locations?.from} -> ${locations?.destination}`,
						headerTitleStyle: { fontSize: 17 },
						headerBackButtonMenuEnabled: true,
						headerBackVisible: true,
						headerBackImageSource: leftArrow64,
						headerTitleAlign: "center",
						headerTintColor: "#ffffff",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: "rgb(104,112,137)" },
					}}
				/>

				<Stack.Screen name="TicketDetails" component={TicketDetails} />
				<Stack.Screen name="Booked" component={BookedTicket} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;

const styles = StyleSheet.create({});

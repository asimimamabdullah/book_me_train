import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "./../Screens/Search";
import MyTickets from "./../Screens/MyTickets";
import Account from "./../Screens/Account";

const BottomTabs = createBottomTabNavigator();

const Tabs = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerShown: true,
				tabBarStyle: {
					height: 50,
				},
				tabBarIcon: ({ focused }) => (
					<View
						style={{
							width: 27,
							height: 27,
							borderRadius: 15,
							backgroundColor: focused
								? "dodgerblue"
								: "rgb(104,112,137)",
						}}
					/>
				),
			}}>
			<BottomTabs.Screen
				name="Home"
				component={Search}
				options={{
					headerShown: true,
					headerTitle: "Find tickets",
					headerTitleAlign: "center",
					headerTintColor: "#fff",
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: "rgb(104,112,137)",
					},
				}}
			/>
			<BottomTabs.Screen
				name="MyTickets"
				component={MyTickets}
				options={{
					headerTitle: "My Tickets",
					headerStyle: { backgroundColor: "rgb(104,112,137)" },
					headerTintColor: "#fff",
					headerTitleAlign: "center",
				}}
			/>
			<BottomTabs.Screen
				name="Account"
				component={Account}
				options={{
					headerTitle: "Account",
					headerTitleAlign: "center",
					headerTintColor: "#ffffff",
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: "rgb(104,112,137)",
					},
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default Tabs;

const styles = StyleSheet.create({});

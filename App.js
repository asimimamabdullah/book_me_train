import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Tabs from "./App/BottomNavigation/Tabs";
import { leftArrow, leftArrow64 } from "./assets/icons";
import Login from "./App/Screens/Login";
import Register from "./App/Screens/Register";
import EventDetails from "./App/Screens/EventDetails";
import TicketsAvailable from "./App/Screens/TicketsAvailable";

const Stack = createNativeStackNavigator();

export default function App() {
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
						headerTitle: `Birmingham -> Manchester`,
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
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

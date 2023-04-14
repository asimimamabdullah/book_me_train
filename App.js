import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { leftArrow, leftArrow64 } from "./assets/icons";
import Login from "./Component/Screens/Login";
import Register from "./Component/Screens/Register";
import Search from "./Component/Screens/Search";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Search" screenOptions={{}}>
				{/* <Stack.Screen name='Search' component={Search}  />
        <Stack.Screen name='MyTickets' component={MyTicket}  />
      <Stack.Screen name='Account' component={Account}  /> */}

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
					name="Search"
					component={Search}
					options={{
						headerBackButtonMenuEnabled: false,
						headerBackVisible: false,
						headerTitle: "Find Tickets",
						headerTitleAlign: "center",
						headerTintColor: "#ffffff",
						headerStyle: { backgroundColor: "rgb(104,112,137)" },
						headerShadowVisible: false,
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

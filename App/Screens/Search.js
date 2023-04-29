import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Single from "./Single";
import Return from "./Return";
import { useDispatch, useSelector } from "react-redux";
import {
	selectLocationDetails,
	setLocations,
} from "../redux/app/locations/locationsSlice";
import { store } from "../redux/store";

const MyTabs = createMaterialTopTabNavigator();

const Search = () => {
	const [search, setSearch] = useState({ from: "", destination: "" });
	const dispatch = useDispatch();
	const currentLocation = useSelector(selectLocationDetails);

	useEffect(() => {
		dispatch(setLocations({ ...search }));
	}, [search.from, search.destination]);

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.upperHeaderContainer}>
				{/* lines draw  */}
				<View style={styles.linesDrawContainer}>
					<View style={styles.linesDrawCircle} />

					<View style={styles.linesDrawLine} />
					<View style={styles.linesDrawLine} />
					<View style={styles.linesDrawLine} />
					<View style={styles.linesDrawLine} />
					<View style={styles.linesDrawLine} />
					<View style={styles.linesDrawLine} />
					<View style={styles.linesDrawCircle} />
				</View>
				{/* inputs  */}
				<View style={{ gap: 15, flex: 1 }}>
					<TextInput
						value={search?.from}
						onChangeText={(text) =>
							setSearch((old) => ({ ...old, from: text }))
						}
						onFocus={() =>
							search?.from?.length < 1
								? setSearch((val) => ({
										...val,
										from: `${currentLocation?.currentRegion?.city}, ${currentLocation?.currentRegion?.street}`,
								  }))
								: setSearch((val) => val)
						}
						style={styles.upperContainerInput}
						placeholder="From"
					/>
					<TextInput
						value={search?.destination}
						onChangeText={(text) =>
							setSearch((old) => ({ ...old, destination: text }))
						}
						placeholder="destination"
						style={styles.upperContainerInput}
					/>
				</View>
			</View>

			<MyTabs.Navigator
				screenOptions={{ tabBarStyle: { paddingVertical: 10 } }}>
				<MyTabs.Screen
					name="Single"
					component={Single}
					options={{ tabBarLabelStyle: { fontWeight: 600 } }}
				/>
				<MyTabs.Screen
					name="Return"
					component={Return}
					options={{ tabBarLabelStyle: { fontWeight: 600 } }}
				/>
			</MyTabs.Navigator>
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	upperHeaderContainer: {
		backgroundColor: "rgb(104,112,137)",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 15,
		paddingHorizontal: 35,
		paddingVertical: 20,
	},
	linesDrawContainer: {
		alignItems: "center",
		gap: 2,
	},
	linesDrawCircle: {
		width: 15,
		height: 15,
		borderRadius: 10,
		backgroundColor: "white",
	},
	linesDrawLine: { backgroundColor: "white", width: 1, height: 5 },
	upperContainerInput: {
		paddingHorizontal: 20,
		paddingVertical: 5,
		backgroundColor: "white",
		borderRadius: 5,
	},
});

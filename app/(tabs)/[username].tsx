import {
	FlatList,
	Pressable,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { router, useGlobalSearchParams } from "expo-router";
import { USERS } from "@/constants/defaultData";
import React from "react";

export default function TabTwoScreen() {
	const { username } = useGlobalSearchParams();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello, {username}</Text>
			<View style={styles.main}>
				<FlatList
					style={{ flexGrow: 0 }}
					data={
						USERS.find(
							({ username: username_ }) => username === username_
						)?.subjects
					}
					renderItem={({ item }) => (
						<TouchableOpacity style={styles.itemTouchable}>
							<Text style={styles.item}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
			<TouchableOpacity
				onPress={() => {
					router.replace("/(tabs)");
				}}
				style={{
					backgroundColor: "#eee",
					paddingHorizontal: 20,
					paddingVertical: 10,
					borderRadius: 5,
				}}
			>
				<Text style={{ fontWeight: "500", fontSize: 18 }}>Sign out</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 50,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	main: {},
	itemTouchable: {
		marginVertical: 5,
		backgroundColor: "#eee",
		padding: 15,
		borderRadius: 5,
	},
	item: {
		fontSize: 20,
		fontWeight: "400",
	},
});

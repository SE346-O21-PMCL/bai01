import { Button, StyleSheet, TextInput } from "react-native";

import { Text, View } from "@/components/Themed";
import { USERS } from "@/constants/defaultData";
import { router } from "expo-router";
import { useState } from "react";

export default function TabOneScreen() {
	const [username, setUsername] = useState<string>();
	const [password, setPassword] = useState<string>();

	const [message, setMessage] = useState<string>();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<View style={styles.main}>
				<Text style={styles.label}>Username</Text>
				<TextInput
					style={styles.input}
					onChangeText={(text) => {
						setUsername(text);
						setMessage("");
					}}
					defaultValue={username}
				/>
				<Text style={styles.label}>Password</Text>
				<TextInput
					textContentType={"password"}
					style={styles.input}
					onChangeText={(text) => {
						setPassword(text);
						setMessage("");
					}}
					defaultValue={password}
				/>
			</View>
			{message ? <Text style={styles.message}>{message}</Text> : null}
			<Button
				onPress={() => {
					if (
						USERS.some(
							({ username: username_, password: password_ }) =>
								username == username_ && password == password_
						)
					) {
						router.replace(`/(tabs)/${username}`);
					} else {
						setMessage("Username or password is wrong");
					}
				}}
				title="Sign in"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
		gap: 50,
		// alignItems: "center",
		// justifyContent: "center",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
	},
	main: {},
	label: {
		fontSize: 20,
		marginBottom: 10,
		fontWeight: "600",
		marginTop: 30,
	},
	input: {
		height: 40,
		borderWidth: 1,
		padding: 10,
		fontSize: 20,
		borderRadius: 5,
	},
	message: {
		fontSize: 20,
		color: "red",
	},
	button: {
		textTransform: "capitalize",
	},
});

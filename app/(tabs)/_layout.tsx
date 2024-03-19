import { Slot } from "expo-router";
import React from "react";

import { useColorScheme } from "@/components/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return <Slot></Slot>;
}

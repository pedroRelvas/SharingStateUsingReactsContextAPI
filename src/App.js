import React from "react";
import "./styles.css";
import UserMessage from "./components/userMessage";
import SettingsForm from "./components/UserSettings";
import { UserProvider } from "./utils/user-context";

export default function App() {
	return (
		<UserProvider>
			<UserMessage />
			<SettingsForm />
		</UserProvider>
	);
}

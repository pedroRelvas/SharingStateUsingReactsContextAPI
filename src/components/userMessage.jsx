import React from "react";
import { UserConsumer } from "../utils/user-context";

export default function UserMessage() {
	return (
		<UserConsumer>
			{({ username }) => <h1>Welcome {username}!</h1>}
		</UserConsumer>
	);
}

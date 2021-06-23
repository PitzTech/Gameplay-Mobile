import React, { useState } from "react"
import { View, Text, TextInput } from "react-native"

import { styles } from "./styles"

export const SignIn: React.FC = () => {
	const [text, setText] = useState("")
	return (
		<View style={styles.container}>
			<Text>SignIn Page</Text>

			<TextInput style={styles.input} onChangeText={setText} />

			<Text>Você digitou: {text}</Text>
		</View>
	)
}

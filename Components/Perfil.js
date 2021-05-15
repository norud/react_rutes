import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Perfil({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Perfil</Text>
			<Button
				title="Publicacion"
				onPress={() => {
					navigation.push('Publicacion');
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2f3e50',
	},
});

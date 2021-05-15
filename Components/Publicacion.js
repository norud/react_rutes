import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Publicacion({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>{`Publicacion ${Date.now().toString()}`}</Text>
			<Button
				title="Perfil"
				onPress={() => {
					navigation.push('Perfil');
				}}
			/>
			<Button
				title="Comentarios"
				onPress={() => {
					navigation.push('Comentarios');
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
		backgroundColor: '#2e3e50',
	},
});

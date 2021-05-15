import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Comentarios({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Comentarios</Text>
			<Button
				title="Perfil"
				onPress={() => {
					navigation.push('Perfil');
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
		backgroundColor: '#2d3e53',
	},
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MiStackGeneral from './Components/MiStackGeneral';
import MiBottomTab from './Components/MiBottomTab';

export default function App() {
	return (
		<NavigationContainer>
			<MiBottomTab />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

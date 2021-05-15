import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const InicioDrawer = (props) => {
	console.log(props);
	console.log('cargar Inicio Drawer');
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Inicio Drawer</Text>
			<Button
				title="Publicacion"
				onPress={() => {
					props.navigation.navigate('Publicacion');
				}}
			/>
		</View>
	);
};

const BesquedaDrawer = () => {
	console.log('cargar Search');
	return (
		<View>
			<Text>Busqueda Drawer</Text>
		</View>
	);
};

export default function ProfilDrawr() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Inicio" component={InicioDrawer} />
			<Drawer.Screen name="Besqueda" component={BesquedaDrawer} />
		</Drawer.Navigator>
	);
}

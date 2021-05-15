import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Publicacion from './Publicacion';
import Perfil from './Perfil';
import Comentarios from './Comentarios';
import ProfilDrawer from './ProfilDrawer';

const Stack = createStackNavigator();

const Home = ({ navigation, route }) => {
	console.log('cargar Home');
	return (
		<View>
			<Text>Home</Text>
			<Button
				title=" Publicaciones"
				onPress={() => {
					navigation.push('Publicacion');
				}}
			/>
		</View>
	);
};

const Search = ({ navigation, route }) => {
	console.log('cargar Search');
	return (
		<View>
			<Text>Search</Text>
			<Button
				title=" Publicaciones"
				onPress={() => {
					navigation.push('Publicacion');
				}}
			/>
		</View>
	);
};

/*
aqui recibe la porps nombreRutaInicial se le pasa a navigator
 */
export default function MiStackGeneral({ nombreRutaInicial }) {
	return (
		<Stack.Navigator initialRouteName={nombreRutaInicial} headerMode="float">
			<Stack.Screen name="Publicacion" component={Publicacion} />
			<Stack.Screen name="Perfil" component={Perfil} />
			<Stack.Screen name="Comentarios" component={Comentarios} />
			<Stack.Screen name="Inicio" component={Home} />
			<Stack.Screen name="Busqueda" component={Search} />
			<Stack.Screen name="ProfileDrawer" component={ProfilDrawer} />
		</Stack.Navigator>
	);
}

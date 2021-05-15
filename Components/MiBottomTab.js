import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MiStackGeneral from './MiStackGeneral';
import ProfilDrawr from './ProfilDrawer';

const Home = () => {
	console.log('cargar Home');
	return (
		<View>
			<Text>Home</Text>
		</View>
	);
};
const Search = () => {
	console.log('cargar Search');
	return (
		<View>
			<Text>Search</Text>
		</View>
	);
};
const Add = () => {
	console.log('cargar Add');
	return (
		<View>
			<Text>Add</Text>
		</View>
	);
};
const Follow = () => {
	console.log('cargar Follow');
	return (
		<View>
			<Text>Follow</Text>
		</View>
	);
};
const Perfil = () => {
	console.log('cargar Perfil');
	return (
		<View>
			<Text>Perfil</Text>
		</View>
	);
};
const Tab = createBottomTabNavigator();

export default function MiBottomTab() {
	return (
		<Tab.Navigator styles={styles.container}>
			{/*
        aqui pasamos la porps nombreRutaInicial a MiStackGeneral
         */}
			<Tab.Screen
				options={({ ...args }) => {
					console.log(args);
					if (args.route.state) {
						if (
							args.route.state.routes[args.route.state.routes.length - 1]
								.name === 'Comentarios'
						) {
							return { tabBarVisible: false };
						}
					}
					return { tabBarVisible: true };
				}}
				name="Home"
			>
				{(props) => <MiStackGeneral {...props} nombreRutaInicial="Inicio" />}
			</Tab.Screen>
			<Tab.Screen name="Search">
				{(props) => <MiStackGeneral {...props} nombreRutaInicial="Busqueda" />}
			</Tab.Screen>
			<Tab.Screen name="Add" component={MiStackGeneral} />
			<Tab.Screen name="Follow" component={MiStackGeneral} />
			<Tab.Screen name="Profile">
				{(props) => (
					<MiStackGeneral {...props} nombreRutaInicial="ProfileDrawer" />
				)}
			</Tab.Screen>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		fontSize: 20,
	},
});

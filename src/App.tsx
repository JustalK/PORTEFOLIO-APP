// For Navigation purpose
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { registerRootComponent } from 'expo';
import React from "react";
import { StyleSheet, View } from "react-native";
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { colors } from './consts/colors'

export default function App() {
	return (
		<NavigationContainer>
		<Stack.Navigator>
  			<Stack.Screen
				name="Home"
				component={Home}
				options={{ title: 'Welcome' }} />
			<Stack.Screen name="Portfolio" component={Portfolio} />
		</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBlue,
		alignItems: "center",
		justifyContent: "center",
	}
});

registerRootComponent(App);

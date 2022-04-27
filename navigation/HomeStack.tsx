import "react-native-gesture-handler";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Accueil from "../ecrans/Accueil";
import AccueilJoie from "../ecrans/joie/AccueilJoie";
import ConseilJoieConnue from "../ecrans/joie/ConseilJC";
import HistoriqueJoie from "../ecrans/joie/HistoriqueJoie";
import ConseilJoieInconnue from "../ecrans/joie/ConseilJI";
import AccueilColere from "../ecrans/colere/AccueilColere";
import ConseilColereConnue from "../ecrans/colere/ConseilCC";
import ConseilColereInconnue from "../ecrans/colere/ConseilCI";
import HistoriqueColere from "../ecrans/colere/HistoriqueColere";
import AccueilTristesse from "../ecrans/tristesse/AccueilTristesse";
import ConseilTristesseConnue from "../ecrans/tristesse/ConseilTC";
import ConseilTristesseInconnue from "../ecrans/tristesse/ConseilTI";
import HistoriqueTristesse from "../ecrans/tristesse/HistoriqueTristesse";
import Connexion from "../ecrans/Connexion";
import CreationCompte from "../ecrans/CreationCompte";
import Lexique from "../ecrans/Lexique";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="pageConnexion ">
      <Stack.Screen
        name="Connexion"
        component={Connexion}
        options={{
          title: "Connexion",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Accueil"
        component={Accueil}
        options={{
          title: "Accueil",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Stack.Screen
        name="AccueilJoie"
        component={AccueilJoie}
        options={{
          title: "Conseil Joie et je sais pourquoi",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ConseilJC"
        component={ConseilJoieConnue}
        options={{
          title: "Conseil Joie et je sais pourquoi",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ConseilJI"
        component={ConseilJoieInconnue}
        options={{
          title: "Conseil Joie et je sais pourquoi",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HistoriqueJoie"
        component={HistoriqueJoie}
        options={{
          title: "Histo Joie",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AccueilColere"
        component={AccueilColere}
        options={{
          title: "AccueilColer",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ConseilCC"
        component={ConseilColereConnue}
        options={{
          title: "Conseil CC",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ConseilCI"
        component={ConseilColereInconnue}
        options={{
          title: "Conseil colère inconnue",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HistoriqueColere"
        component={HistoriqueColere}
        options={{
          title: "Histo Joie",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AccueilTristesse"
        component={AccueilTristesse}
        options={{
          title: "Accueil Tristesse",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ConseilTC"
        component={ConseilTristesseConnue}
        options={{
          title: "Conseil tristesse connue",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ConseilTI"
        component={ConseilTristesseInconnue}
        options={{
          title: "Conseil tristesse inconnue",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HistoriqueTristesse"
        component={HistoriqueTristesse}
        options={{
          title: "Conseil tristesse connue",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CreationCompte"
        component={CreationCompte}
        options={{
          title: "CreationCompte",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Lexique"
        component={Lexique}
        options={{
          title: "Lexique",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Accueil from "../ecrans/Accueil";
import AccueilColere from "../ecrans/colere/AccueilColere";
import HomeStack from "./HomeStack";
import { AntDesign } from "@expo/vector-icons";
import Connexion from "../ecrans/Connexion";
import Lexique from "../ecrans/Lexique";
import Profil from "../ecrans/Profil";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "rgba(239, 237, 246, 1)",
        },
      }}
    >
      <Tab.Screen
        name=" "
        component={HomeStack}
        options={{
          tabBarIcon: ({}) => (
            <AntDesign
              name="hearto"
              color={"rgba(239, 237, 246, 1)"}
              size={13}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lexique "
        component={Lexique}
        options={{
          tabBarActiveTintColor: "indigo",

          tabBarIcon: ({}) => (
            <AntDesign name="profile" color={"grey"} size={45} />
          ),
        }}
      />

      <Tab.Screen
        name="Accueil"
        component={Accueil}
        options={{
          tabBarActiveTintColor: "indigo",
          tabBarIcon: ({}) => (
            <AntDesign name="home" color={"grey"} size={50} />
          ),
        }}
      />

      <Tab.Screen
        name="Mon Profil"
        component={Profil}
        options={{
          tabBarActiveTintColor: "indigo",
          tabBarIcon: ({}) => (
            <AntDesign name="user" color={"grey"} size={50} />
          ),
        }}
      />

      <Tab.Screen
        name="     "
        component={Connexion}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({}) => (
            <AntDesign name="hearto" color="rgba(239, 237, 246, 1)" size={1} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

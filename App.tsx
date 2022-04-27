import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./navigation/HomeStack";
import Profil from "./ecrans/Lexique";
import BottomTab from "./navigation/BottomTab";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(254, 255, 237, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
});

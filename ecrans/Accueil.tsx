import { StatusBar } from "expo-status-bar";
import { useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
  Image,
} from "react-native";
import user from "../services/user";
import User from "../services/user";

export default function Accueil({ navigation }) {
  return (
    <View style={styles.pageAccueil}>
      <View>
        <Image
          style={{
            resizeMode: "stretch",
            height: 120,
            width: 250,
            alignSelf: "center",
            marginTop: 10,
          }}
          source={require("../assets/logoPII.jpg.png")}
        />
      </View>
      <Text style={styles.bonjour}>
        Bonjour {user.users[0].nom}, comment vous sentez-vous aujourd'hui?
      </Text>
      <View>
        <Pressable onPress={() => navigation.navigate("AccueilJoie")}>
          <View style={styles.bulleJoie}>
            <Text style={styles.titre}> Joie</Text>

            <Text style={styles.sousTitre}>Je me sens joyeux.se</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.bulleColere}>
        <Pressable onPress={() => navigation.navigate("AccueilColere")}>
          <Text style={styles.titre}> Colère</Text>

          <Text style={styles.sousTitre}> Je veux pouvoir gérer ma colère</Text>
        </Pressable>
      </View>

      <View style={styles.bulleTristesse}>
        <Pressable onPress={() => navigation.navigate("AccueilTristesse")}>
          <Text style={styles.titre}> Tristesse</Text>

          <Text style={styles.sousTitre}>
            Je veux pouvoir gérer ma tristesse
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pageAccueil: {
    backgroundColor: "rgba(239, 237, 246, 1)",
    flex: 1,
  },

  bulleColere: {
    borderRadius: 36, // radius différente de la colère et la joie
    backgroundColor: "rgba(251, 122, 127, 1)",
    height: 100,
    alignItems: "center",
    top: 20,
    marginHorizontal: 30, // margin différent de la colère et la joie
    marginVertical: 25,
  },
  bulleTristesse: {
    borderRadius: 36, // radius différente de la colère et la joie
    backgroundColor: "rgba(194, 225, 239, 1)",
    height: 100,
    alignItems: "center",
    top: 20,
    marginHorizontal: 30, // margin différent de la colère et la joie
    marginVertical: 10,
  },

  bulleJoie: {
    borderRadius: 36,
    backgroundColor: "rgba(255, 217, 144, 1)",
    height: 100,
    alignItems: "center",
    top: 20,
    marginHorizontal: 30,
    marginVertical: 15,
    marginTop: 5,
  },

  titre: {
    fontSize: 24,
    marginTop: 15,
    textAlign: "center",
    fontWeight: "300",
  },

  sousTitre: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "300",
  },

  bonjour: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 6,
    fontWeight: "300",
  },
});

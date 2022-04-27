import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

export default function AccueilJoie({ navigation }) {
  return (
    <View style={styles.joie}>
      <Pressable onPress={() => navigation.navigate("ConseilJC")}>
        <View style={styles.bulleJoie}>
          <Text style={styles.titreJoie}> Je me sens joyeux.se </Text>
          <Text style={styles.soustitreJoie}>
            Je ressens de la joie, et je sais pourquoi
          </Text>
        </View>
      </Pressable>

      <View style={styles.bulleJoie}>
        <Pressable onPress={() => navigation.navigate("ConseilJI")}>
          <Text style={styles.titreJoie}> Je me sens joyeux.se </Text>
          <Text style={styles.soustitreJoie}>
            Je ressens de la joie, mais je n'arrive pas à savoir pourquoi
          </Text>
        </Pressable>
      </View>

      <View style={styles.bulleJoie}>
        <Pressable onPress={() => navigation.navigate("HistoriqueJoie")}>
          <Text style={styles.titreJoie}> Mes souvenirs joyeux</Text>

          <Text style={styles.soustitreJoie}>
            Je ressens de la joie, et je veux m'en souvenir
          </Text>
        </Pressable>
      </View>

      <View style={styles.boutonRetourJoie}>
        <Pressable onPress={() => navigation.navigate("Accueil")}>
          <Text style={styles.boutonTexte}> Retour</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bulleJoie: {
    borderRadius: 35,
    backgroundColor: "rgba(255, 217, 144, 1)",
    height: 90,
    alignItems: "center",
    width: 300,
    top: 70,
    marginVertical: 25,
  },

  titreJoie: {
    top: 15,
    bottom: 3,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "300",
  },

  soustitreJoie: {
    marginTop: 17,
    marginBottom: 3,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "300",
    marginHorizontal: 15,
  },

  joie: {
    backgroundColor: "rgba(254, 255, 237, 1)",
    flex: 1,
    alignItems: "center",
  },

  conseil: {
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 40,
    fontWeight: "300",
  },

  boutonRetourJoie: {
    marginLeft: 215,
    marginTop: 70,
    borderRadius: 100,
    backgroundColor: "rgba(255, 217, 144, 1)",
    width: 100,
    height: 60,
  },

  boutonTexte: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 17,
    fontWeight: "300",
  },
});

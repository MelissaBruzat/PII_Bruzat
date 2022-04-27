import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import user from "../services/user";

export default function Profil({ navigation }) {
  return (
    <View style={styles.fond}>
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
      <View style={styles.bulleTitre}>
        <Text style={styles.titre}>Mon Profil</Text>
      </View>

      <View style={styles.bulle}>
        <View style={styles.bulleTexte}>
          <Text style={styles.texte}> Mon identifiant pour me connecter </Text>
          <Text style={styles.infos}> {user.users[0].id} </Text>
        </View>

        <View style={styles.bulleTexte}>
          <Text style={styles.texte}> Prénom </Text>
          <Text style={styles.infos}> {user.users[0].nom} </Text>
        </View>

        <View style={styles.bulleTexte}>
          <Text style={styles.texte}> Mot de passe </Text>
          <Text style={styles.infos}> {user.users[0].mdp} </Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Connexion")}>
          <View style={styles.deconnexion}>
            <Text style={styles.deconnexionTexte}>Déconnexion </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fond: {
    flex: 1,
    backgroundColor: "rgba(239, 237, 246, 1)",
    alignContent: "center",
  },

  bulleTitre: {
    backgroundColor: "rgba(206, 210, 249, 1)",
    height: 58,
    alignItems: "center",
    top: 8,
    marginHorizontal: 70,
    marginTop: 8,
    textAlignVertical: "center",
    borderRadius: 30,
    justifyContent: "center",
    fontWeight: "300",
  },
  titre: { fontSize: 20, textAlign: "center", fontWeight: "300" },

  bulleTexte: {
    backgroundColor: "(rgba(206, 210, 249, 1)",
    borderRadius: 100,
    height: 66,
    width: 260,
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    marginVertical: 15,
    fontWeight: "300",
  },

  bulle: {
    backgroundColor: "lavender",
    borderRadius: 20,
    height: 350,
    marginTop: 40,
    marginHorizontal: 30,
    marginBottom: 15,
    alignItems: "center",
  },

  texte: {
    textAlign: "center",
    fontWeight: "500",
  },
  infos: {
    textAlign: "center",
    marginTop: 7,
    fontWeight: "300",
    marginHorizontal: 40,
  },

  deconnexion: {
    backgroundColor: "rgba(207, 184, 205, 1)",
    borderRadius: 100,
    height: 38,
    width: 200,
    justifyContent: "center",
    marginVertical: 10,
  },
  deconnexionTexte: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
});

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
} from "react-native";

export default function Connexion({ navigation }) {
  return (
    <View style={styles.fond}>
      <View>
        <Image
          style={{
            resizeMode: "stretch",
            height: 120,
            width: 250,
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 2,
          }}
          source={require("../assets/logoPII.jpg.png")}
        />
      </View>
      <View style={styles.bulleTitre}>
        <Text style={styles.titre}>Connexion</Text>
      </View>

      <View style={styles.bulle}>
        <View style={styles.bulleTexte}>
          <Text style={styles.texte}> Identifiant : </Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre identifiant "
          ></TextInput>
        </View>

        <View style={styles.bulleTexte}>
          <Text style={styles.texte}> Mot de passe : </Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre mot de passe  "
          ></TextInput>
        </View>

        <Pressable
          onPress={(UserService) => {
            navigation.navigate("Accueil");
          }}
        >
          <View style={styles.bulleConnexion}>
            <Text style={styles.texte}>Me connecter </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("CreationCompte")}>
          <View style={styles.bulleCreation}>
            <Text style={styles.texte}>Créer un compte </Text>
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

  bulleConnexion: {
    backgroundColor: "(rgba(206, 210, 249, 1)",
    borderRadius: 100,
    height: 38,
    width: 200,
    justifyContent: "center",
    marginTop: 20,
  },

  bulleCreation: {
    backgroundColor: "rgba(180, 184, 221, 1)",
    borderRadius: 18,
    height: 38,
    width: 200,
    justifyContent: "center",
    marginVertical: 15,
  },

  bulleTitre: {
    backgroundColor: "rgba(206, 210, 249, 1)",
    height: 58,
    alignItems: "center",
    marginHorizontal: 70,
    marginTop: 5,
    textAlignVertical: "center",
    borderRadius: 30,
    justifyContent: "center",
    fontWeight: "300",
  },
  titre: { fontSize: 20, textAlign: "center", fontWeight: "300" },

  bulleTexte: {
    backgroundColor: "(rgba(206, 210, 249, 1)",
    borderRadius: 30,
    height: 76,
    width: 240,
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  logo: {
    backgroundColor: "beige",
    height: 120,
    width: 210,
    marginTop: 20,
    marginLeft: 85,
  },

  bulle: {
    backgroundColor: "lavender",
    borderRadius: 20,
    height: 370, //à voir si en enleveant la hauteur ca ne s'adapte pas tout seul
    marginTop: 20,
    marginHorizontal: 30,
    marginBottom: 15,
    alignItems: "center",
  },

  texte: {
    textAlign: "center",
    fontWeight: "300",
  },

  input: { textAlign: "center", marginTop: 7, fontWeight: "300" },
});

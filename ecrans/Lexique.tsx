import { StatusBar } from "expo-status-bar";
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

export default function Lexique({}) {
  return (
    <View style={styles.fond}>
      <View style={styles.bulleTitre}>
        <Text style={styles.titre}>Lexique </Text>
        <Text style={styles.sousTitre}>
          Ces mots qui peuvent nous permettre de comprendre et de communiquer
          l'état d'esprit dans lequel on se sent
        </Text>
      </View>

      <View style={styles.bulle}>
        <ScrollView>
          <Text style={styles.surligneJoie}>Sentiments relatifs à la joie</Text>
          <Text style={styles.texte}>
            Amoureux , Content, Enchanté, Enjoué, Enthousiaste, Euphorique,
            Excité, Fier, Heureux, Passionné, Réjoui, Satisfait
          </Text>

          <Text style={styles.surligneColere}>
            Sentiments relatifs à la colère
          </Text>
          <Text style={styles.texte}>
            Agacé, Agité,Agressif, Contrarié, Crispé, Enragé, Exaspéré, Excédé,
            Froissé, Furieux, Hostile, Irrité, Mécontent, Nerveux, Remonté
          </Text>

          <Text style={styles.surligneTristesse}>
            Sentiments relatifs à la tristesse
          </Text>
          <Text style={styles.texte}>
            Abattu, Accablé, Affecté, Affligé, Anéanti, Atterré, Attristé,
            Blessé, Bouleversé, Cafardeux, Chagriné, Consterné, Déchiré, Déçu,
            Défait, Déprimé, Désabusé, Désenchanté, Désespéré, Désolé , Ému,
            Éploré, Lugubre, Malheureux, Maussade, Mélancolique, Morose , Navré,
            Nostalgique, Peiné, Sombre, Soucieux, Taciturne
          </Text>
        </ScrollView>
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

    alignItems: "center",
    marginHorizontal: 50,
    marginTop: 35,
    borderRadius: 40,
    justifyContent: "center",
    fontWeight: "300",
  },
  titre: { fontSize: 25, textAlign: "center", fontWeight: "300", marginTop: 5 },

  bulleTexte: {
    backgroundColor: "(rgba(206, 210, 249, 1)",
    borderRadius: 20,
    height: 75,
    width: 270,
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    marginVertical: 15,
    fontWeight: "300",
  },

  bulle: {
    backgroundColor: "lavender",
    borderRadius: 20,
    height: 390,
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 15,
    alignItems: "center",
  },

  texte: {
    textAlign: "center",
    fontWeight: "300",
    marginTop: 5,
  },
  surligneJoie: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 15,
    fontWeight: "300",
    textShadowColor: "rgba(255, 245, 0, 1)",
    textShadowRadius: 10,
  },

  surligneColere: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 25,
    marginHorizontal: 15,
    fontWeight: "300",
    textShadowColor: "red",
    textShadowRadius: 8,
  },

  surligneTristesse: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 25,
    marginHorizontal: 15,
    fontWeight: "300",
    textShadowColor: "rgba(23, 210, 251, 1)",
    textShadowRadius: 8,
  },

  sousTitre: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 13,
    textAlign: "center",
    fontWeight: "300",
    marginHorizontal: 15,
  },
});

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

export default function ConseilJoieConnue({ navigation }) {
  return (
    <View style={styles.joie}>
      <View style={styles.bulleJoie}>
        <Text style={styles.titreJoie}> Je me sens joyeux.se </Text>
        <Text style={styles.soustitreJoie}>
          Je ressens de la joie, et je sais pourquoi
        </Text>
      </View>

      <View style={styles.bulleConseilsJoie}>
        <ScrollView>
          <Text style={styles.titre2}>Partager </Text>
          <Text style={styles.conseil}>
            Si vous vous sentez joyeux.se grâce à un événement ou à une
            personne, prenez le temps de remercier cette personne. Se montrer
            reconnaissant.e permet d’apprécier pleinement le moment et la joie
            qu’ils vous provoquent, d’autant plus que cela permettra d’égayer la
            journée de votre entourage.
          </Text>
          <Text style={styles.titre2}> S'en souvenir </Text>
          <Text style={styles.conseil}>
            Il est très bénéfique pour beaucoup d’écrire sur les petites choses
            qui constituent notre quotidien. Alors, si vous vous sentez
            joyeux.se, n’hésitez pas à l’écrire pour pouvoir vous remémorer cet
            événement qui vous a procuré tant de joie. Ces souvenirs pourront
            être ressortis à l’avenir pour vous donner le sourire.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.boutonRetourJoie}>
        <Pressable onPress={() => navigation.navigate("AccueilJoie")}>
          <Text style={styles.boutonTexte}>Retour</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bulleJoie: {
    borderRadius: 35,
    backgroundColor: "rgba(255, 217, 144, 1)",
    height: 95,
    alignItems: "center",
    top: 20,
    marginHorizontal: 75,
    marginBottom: 20,
  },

  titreJoie: {
    flex: 1,
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "300",
  },

  soustitreJoie: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 12,
    marginHorizontal: 4,
    textAlign: "center",
    fontWeight: "300",
  },

  joie: {
    backgroundColor: "rgba(254, 255, 237, 1)",
    flex: 1,
  },

  conseil: {
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 12,
    fontWeight: "300",
  },

  boutonRetourJoie: {
    marginLeft: 260,
    marginTop: 30,
    borderRadius: 100,
    backgroundColor: "rgba(255, 217, 144, 1)",
    width: 90,
    height: 50,
  },

  bulleConseilsJoie: {
    backgroundColor: "rgba(260, 240, 204, 10)",
    borderColor: "rgba(255, 248, 233, 1)",
    borderRadius: 20,
    height: 320,
    marginTop: 40,
    marginHorizontal: 30,
  },

  boutonTexte: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 12,
    fontWeight: "300",
  },

  titre2: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
    marginHorizontal: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});

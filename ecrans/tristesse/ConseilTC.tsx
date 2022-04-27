import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

export default function ConseilTristesseConnue({ navigation }) {
  return (
    <View style={styles.tristesse}>
      <View style={styles.tristesse}></View>
      <View style={styles.bulleTristesse}>
        <Text style={styles.titreTristesse}> Je me sens triste </Text>
        <Text style={styles.sousTitreTristesse}>
          Je ressens de la tristesse, et je sais pourquoi
        </Text>
      </View>

      <View style={styles.bulleConseilsTristesse}>
        <ScrollView>
          <Text style={styles.titre2}> En parler</Text>
          <Text style={styles.conseil}>
            Si la tristesse a été causée par une personne, vous pouvez essayer
            d’en parler avec cette personne pour qu’elle comprenne l’impact de
            ses agissements. Autrement, vous pouvez en parler à un proche, car
            il est important d'extérioriser sa tristesse et de ne pas se
            renfermer sur soi-même.
          </Text>
          <Text style={styles.titre2}> Extérioriser </Text>
          <Text style={styles.conseil}>
            Si vous le pouvez pratiquer du sport pour ne pas rester absorbé par
            votre état de tristesse. Sinon, l’art peut aussi vous servir
            d’exutoire, par exemple l’écriture aide beaucoup chez certaines
            personnes. Vous pouvez aussi écouter de la musique , dessiner, lire,
            ou encore regarder un film pour vous changer les idées.
          </Text>
          <Text style={styles.titre2}> Contrôler sa respiration </Text>
          <Text style={styles.conseil}>
            Se concentrer sur sa respiration, comme le préconisent les pratiques
            de la sophrologie et la méditation, peut être un moyen de se vider
            l’esprit et de ne pas se focaliser sur une émotion.
          </Text>
          <Text style={styles.titre2}> Ne pas se lasiser submerger</Text>
          <Text style={styles.conseil}>
            La tristesse est une émotion qualifiée de négative, c’est pourquoi
            il est important de ne pas se laisser sombrer dans une émotion qui
            pourrait être grandissante.
          </Text>
          <Text style={styles.titre2}> Prendre soin de soi </Text>
          <Text style={styles.conseil}>
            Pensez à vous reposer et à dormir suffisamment, une alimentation
            saine et variée vous permettra aussi de mieux maîtriser et
            comprendre vos émotions : “un esprit sain dans un corps sain”.
          </Text>
        </ScrollView>
      </View>

      <Pressable
        onPress={() => navigation.navigate("AccueilTristesse")}
        style={styles.boutonRetourTristesse}
      >
        <Text style={styles.boutonTexte}> Retour</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bulleTristesse: {
    borderRadius: 36, // radius différente de la colère et la joie
    backgroundColor: "rgba(194, 225, 239, 1)",
    height: 90,
    alignItems: "center",
    top: 20,
    marginHorizontal: 70, // margin différent de la colère et la joie
    marginBottom: 10,
    marginTop: 15,
  },

  titreTristesse: {
    flex: 1,
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "300",
  },

  sousTitreTristesse: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 12,
    marginHorizontal: 4,
    textAlign: "center",
    fontWeight: "300",
  },

  tristesse: {
    backgroundColor: "rgba(243, 251, 255, 1)",
    flex: 1,
  },

  conseil: {
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 30,
    fontWeight: "300",
  },

  boutonRetourTristesse: {
    marginRight: 90,
    marginLeft: 260,
    borderRadius: 100,
    height: 60,
    width: 100,
    backgroundColor: "rgba(194, 225, 239, 1)",
    marginVertical: 16,
  },

  bulleConseilsTristesse: {
    backgroundColor: "rgba(222, 240, 248, 1)",
    borderRadius: 20,
    height: 330,
    marginTop: 40,
    marginHorizontal: 30,
    marginBottom: 15,
  },

  boutonTexte: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 16,
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

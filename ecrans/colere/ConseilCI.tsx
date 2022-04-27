import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

export default function ConseilColereConnue({ navigation }) {
  return (
    <View style={styles.colere}>
      <View style={styles.bulleColere}>
        <Text style={styles.titreColere}> Je me sens en colère</Text>
        <Text style={styles.soustitreColere}>
          Je ressens de la colère, mais je n'arrive pas à savoir pourquoi
        </Text>
      </View>

      <View style={styles.bulleConseilColere}>
        <ScrollView>
          <Text style={styles.titre2}> En parler </Text>
          <Text style={styles.conseilColere}>
            Vous pouvez parler de la situation à l’un de vos proches, qui vous
            aidera très certainement à pren
          </Text>
          <Text style={styles.titre2}>Se défouler </Text>
          <Text style={styles.conseilColere}>
            Il est bénéfique d'extérioriser sa colère en faisant du sport, en
            effet cela permettra d’une part de ne pas réagir à chaud, et d’autre
            part, les endorphines libérées lors de l’exercice vous permettront
            de vous sentir mieux. L’art peut aussi être un exutoire, et vous
            pourrez alors canaliser votre colère pour vous concentrer sur une
            tâche bien précise. Vous pouvez par exemple écrire, lire, dessiner
            ou encore regarder des films.
          </Text>
          <Text style={styles.titre2}> Prendre soin de soi </Text>
          <Text style={styles.conseilColere}>
            Pensez à vous reposer et à dormir suffisamment, une alimentation
            saine et variée vous permettra aussi de mieux maîtriser et
            comprendre vos émotions : “un esprit sain dans un corps sain”.
          </Text>
        </ScrollView>
      </View>

      <View style={styles.boutonRetourColere}>
        <Pressable onPress={() => navigation.navigate("AccueilColere")}>
          <Text style={styles.boutonTexte}>Retour</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bulleColere: {
    borderRadius: 35,
    backgroundColor: "rgba(251, 122, 127, 1)",
    height: 95,
    alignItems: "center",
    top: 20,
    marginHorizontal: 75,
    marginBottom: 20,
  },

  titreColere: {
    flex: 1,
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "300",
  },

  soustitreColere: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 12,
    marginHorizontal: 4,
    textAlign: "center",
    fontWeight: "300",
  },

  colere: {
    backgroundColor: "rgba(255, 242, 243, 1)",
    flex: 1,
  },

  conseilColere: {
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 30,
    fontWeight: "300",
  },

  boutonRetourColere: {
    height: 50,
    width: 80,
    marginLeft: 260,
    marginTop: 40,
    borderRadius: 100,
    backgroundColor: "rgba(251, 122, 127, 1)",
    textAlign: "center",
  },

  bulleConseilColere: {
    backgroundColor: "rgba(250, 220, 220, 1)",
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

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
          Je ressens de la colère, et je sais pourquoi
        </Text>
      </View>

      <View style={styles.bulleConseilColere}>
        <ScrollView>
          <Text style={styles.titre2}>Ne pas réagir à chaud</Text>
          <Text style={styles.conseilColere}>
            Beaucoup de psychothérapeutes conseillent de prendre du recul face à
            une situation générant de la colère. Compter jusqu’à 10 avant d’agir
            puis prendre de grandes inspirations est une méthode pour se calmer.
            Dans le cas d’une émotion de colère générée par une personne, il est
            bénéfique de prendre le temps d’analyser et de comprendre tous les
            éléments qui nous entourent.
          </Text>
          <Text style={styles.titre2}>
            Prendre en compte les émotions de l'autre
          </Text>
          <Text style={styles.conseilColere}>
            Prendre du temps de réflexion permet aussi de se mettre à la place
            de la personne en face de nous pour ne pas négliger ses émotions.
            Certain.es arrivent à atténuer leur colère grâce à l'empathie:
            imaginer les conséquences nocives sur autrui que pourraient avoir
            une réponse sous le coup de la colère.
          </Text>
          <Text style={styles.titre2}> Se défouler</Text>
          <Text style={styles.conseilColere}>
            Il est bénéfique d'extérioriser sa colère en faisant du sport, en
            effet cela permettra d’une part de ne pas réagir à chaud, et d’autre
            part, les endorphines libérées lors de l’exercice vous permettront
            de vous sentir mieux. Aussi, si la colère que vous ressentez a été
            causée par une personne, vous pouvez essayer de vous décharger de
            cette colère en écrivant (pour vous ou à destination de cette
            personne, au sujet de vos émotions). L’art peut aussi être un
            exutoire, et vous pourrez alors canaliser votre colère pour vous
            concentrer sur une tâche bien précise. Vous pouvez par exemple
            écrire, lire, dessiner ou encore regarder des films.
          </Text>
          <Text style={styles.titre2}> Prendre soin de soi</Text>
          <Text style={styles.conseilColere}>
            Pensez à vous reposer et à dormir suffisamment, une alimentation
            saine et variée vous permettra aussi de mieux maîtriser et
            comprendre vos émotions : “un esprit sain dans un corps sain”.
          </Text>
          <Text style={styles.titre2}> En parler</Text>
          <Text style={styles.conseilColere}>
            Si une personne vous a mis en colère, vous pouvez vous ouvrir à
            cette personne pour lui exposer vos émotions et comment elle vous a
            fait vous sentir. Si vous ne souhaitez pas en parler avec cette
            personne car cela vous semble inconfortable, rien n’empêche dans
            parler à un de vos proches, qui sera plus apte à se montrer
            compréhensif.ve, et qui pourra vous donner un point de vue objectif
            sur la situation, ce qui pourra même vous aider à prendre l’autre en
            considération.
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
    marginHorizontal: 4,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "300",
  },

  colere: {
    backgroundColor: "rgba(255, 242, 243, 1)",
    flex: 1,
  },

  conseilColere: {
    fontSize: 15,
    marginBottom: 40,
    marginTop: 5,
    marginHorizontal: 30,
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

  boutonRetourColere: {
    height: 50,
    width: 85,
    marginLeft: 260,
    marginBottom: 90,
    borderRadius: 100,
    backgroundColor: "rgba(251, 122, 127, 1)",
  },

  bulleConseilColere: {
    backgroundColor: "rgba(250, 220, 220, 1)",
    borderRadius: 20,
    height: 320,
    marginTop: 40,
    marginBottom: 40,
    marginHorizontal: 30,
  },

  boutonTexte: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 12,
    fontWeight: "300",
  },
});

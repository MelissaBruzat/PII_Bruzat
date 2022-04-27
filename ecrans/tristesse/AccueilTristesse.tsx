import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

export default function AccueilTristesse({ navigation }) {
  return (
    <View style={styles.tristesse}>
      <Pressable onPress={() => navigation.navigate("ConseilTC")}>
        <View style={styles.bulleTristesse}>
          <Text style={styles.titreTristesse}> Je me sens triste </Text>
          <Text style={styles.sousTitreTristesse}>
            Je ressens de la tristesse, et je sais pourquoi
          </Text>
        </View>
      </Pressable>

      <View style={styles.bulleTristesse}>
        <Pressable onPress={() => navigation.navigate("ConseilTI")}>
          <Text style={styles.titreTristesse}> Je me sens triste</Text>
          <Text style={styles.sousTitreTristesse}>
            Je ressens de la tristesse, mais je n'arrive pas à savoir pourquoi
          </Text>
        </Pressable>
      </View>

      <View style={styles.bulleTristesse}>
        <Pressable onPress={() => navigation.navigate("HistoriqueTristesse")}>
          <Text style={styles.titreTristesse}> Mes souvenirs </Text>
          <Text style={styles.sousTitreTristesse}>
            Tous les souvenirs liés à la tristesse qui m'ont permis de mieux
            comprendre mes émotions
          </Text>
        </Pressable>
      </View>

      <View style={styles.boutonRetourTristesse}>
        <Pressable onPress={() => navigation.navigate("Accueil")}>
          <Text style={styles.boutonTexte}>Retour</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bulleTristesse: {
    borderRadius: 36, // radius différente de la colère et la joie
    backgroundColor: "rgba(194, 225, 239, 1)",
    height: 94,
    width: 320,
    alignItems: "center",
    top: 70,
    marginVertical: 25, // margin différent de la colère et la joie
  },

  titreTristesse: {
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "300",
  },

  sousTitreTristesse: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 13,
    textAlign: "center",
    fontWeight: "300",
    marginHorizontal: 15,
  },

  tristesse: {
    backgroundColor: "rgba(243, 251, 255, 1)",
    flex: 1,
    alignItems: "center",
  },

  boutonRetourTristesse: {
    marginLeft: 215,
    marginTop: 70,
    borderRadius: 100,
    backgroundColor: "rgba(194, 225, 239, 1)",
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

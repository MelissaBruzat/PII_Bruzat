import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AccueilColere({ navigation }) {
  return (
    <View style={styles.colere}>
      <Pressable onPress={() => navigation.navigate("ConseilCC")}>
        <View style={styles.bulleColere}>
          <Text style={styles.titreColere}> Je ressens de la colère </Text>
          <Text style={styles.sousTitreColere}>
            Je ressens de la colère, et je sais pourquoi
          </Text>
        </View>
      </Pressable>

      <View style={styles.bulleColere}>
        <Pressable onPress={() => navigation.navigate("ConseilCI")}>
          <Text style={styles.titreColere}> Je ressens de la colère</Text>
          <Text style={styles.sousTitreColere}>
            Je ressens de la colère, mais je n'arrive pas à savoir pourquoi
          </Text>
        </Pressable>
      </View>

      <View style={styles.bulleColere}>
        <Pressable onPress={() => navigation.navigate("HistoriqueColere")}>
          <Text style={styles.titreColere}> Mes souvenirs </Text>
          <Text style={styles.sousTitreColere}>
            Tous les souvenirs liés à la colère qui m'ont permis de mieux
            comprendre mes émotions
          </Text>
        </Pressable>
      </View>

      <View style={styles.boutonRetourColere}>
        <Pressable onPress={() => navigation.navigate("Accueil")}>
          <Text style={styles.boutonTexte}>Retour</Text>
        </Pressable>
      </View>

      <View>
        {/* <View style={styles.footer}>
        <View style={styles.backHome}>
          <Pressable onPress={() => navigation.navigate("accueil")}>
            <AntDesign name="home" size={55} color="grey" />
            <Text style={styles.boutonTexte}>Accueil</Text>
          </Pressable>
        </View>
        <View style={styles.backUser}>
          <Pressable>
            <AntDesign name="user" size={55} color="grey" />
            <Text style={styles.boutonTexte}>Mon Compte </Text>
          </Pressable> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bulleColere: {
    borderRadius: 36,
    backgroundColor: "rgba(251, 122, 127, 1)",
    height: 90,
    width: 320,
    alignItems: "center",
    top: 70,
    marginVertical: 25, // margin différent de la colère et la joie
  },

  titreColere: {
    flex: 1,
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "300",
  },

  sousTitreColere: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 13,
    textAlign: "center",
    fontWeight: "300",
    marginHorizontal: 15,
  },

  colere: {
    backgroundColor: "rgba(255, 242, 243, 1)",
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

  boutonRetourColere: {
    marginLeft: 215,
    marginTop: 70,
    borderRadius: 100,
    backgroundColor: "rgba(251, 122, 127, 1)",
    width: 100,
    height: 60,
  },

  boutonTexte: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 17,
    fontWeight: "300",
  },

  texte: {
    fontSize: 14,
    textAlign: "left",
  },
});

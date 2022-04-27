import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import { NouveauMemoColere } from "../../components/NouveauMemoColere";
import MemoColere from "../../components/MemoColere";
import { useState } from "react";
import user from "../../services/user";

export default function HistoriqueColere({ navigation }) {
  const [memoColere, setMemoColere] = useState([
    { text: user.users[0].colere[0], key: "1" },
    { text: user.users[0].colere[1], key: "2" },
  ]);

  const pressHandler = (key) => {
    setMemoColere((prevMemoColere) => {
      return prevMemoColere.filter((memoColere) => memoColere.key != key);
    });
  };

  const submitHandler = (text) => {
    setMemoColere((prevMemoColere) => {
      return [{ text: text, key: Math.random().toString() }, ...prevMemoColere];
    });
  };

  return (
    <View style={styles.colere}>
      <View style={styles.bulleColere}>
        <Text style={styles.titreColere}> Mes Souvenirs</Text>
      </View>

      <View>
        <View style={styles.bulleConseilColere}>
          <Text style={styles.consigne}>
            Pour supprimer un souvenir, cliquer dessus
          </Text>
          <View>
            <NouveauMemoColere submitHandler={submitHandler} />
          </View>
          <FlatList
            data={memoColere}
            renderItem={({ item }) => (
              <MemoColere item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
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
    height: 80,
    alignItems: "center",
    top: 20,
    marginHorizontal: 60,
    marginBottom: 20,
    marginTop: 29,
  },

  titreColere: {
    flex: 1,
    marginVertical: 26,
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
  },

  colere: {
    backgroundColor: "rgba(255, 242, 243, 1)",
    flex: 1,
  },

  conseil: {
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 40,
  },

  boutonRetourColere: {
    marginLeft: 260,
    marginTop: 30,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: "rgba(251, 122, 127, 1)",
    width: 100,
    height: 50,
  },

  bulleConseilColere: {
    backgroundColor: "rgba(250, 220, 220, 1)",
    borderRadius: 20,
    marginTop: 15,
    marginHorizontal: 15,
    height: 360,
  },

  boutonTexte: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 16,
    fontWeight: "300",
  },

  consigne: {
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 5,
  },
});

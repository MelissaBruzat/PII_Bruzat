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
import { useState } from "react";
import user from "../../services/user";
import MemoJoie from "../../components/MemoJoie";
import { NouveauMemoJoie } from "../../components/NouveauMemoJoie";

export default function HistoriqueJoie({ navigation }) {
  const [memoJoie, setMemoJoie] = useState([
    { text: user.users[0].joie[0], key: "1" },
    { text: user.users[0].joie[1], key: "2" },
    { text: user.users[0].joie[2], key: "3" },
  ]);

  const pressHandler = (key) => {
    setMemoJoie((prevMemoJoie) => {
      return prevMemoJoie.filter((memoJoie) => memoJoie.key != key);
    });
  };

  const submitHandler = (text) => {
    setMemoJoie((prevMemoJoie) => {
      return [{ text: text, key: Math.random().toString() }, ...prevMemoJoie];
    });
  };
  return (
    <View style={styles.joie}>
      <View style={styles.bulleJoie}>
        <Text style={styles.titreJoie}>Mes souvenirs joyeux</Text>
        <Text style={styles.sousTitreJoie}>
          Tous ces souvenirs qui m'ont permis de ressentir de la joie
        </Text>
      </View>

      <View>
        <View style={styles.souvenirJoie}>
          <Text style={styles.consigne}>
            Pour supprimer un souvenir, cliquer dessus
          </Text>
          <NouveauMemoJoie submitHandler={submitHandler} />

          <FlatList
            data={memoJoie}
            renderItem={({ item }) => (
              <MemoJoie item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate("AccueilJoie")}
        style={styles.boutonRetourJoie}
      >
        <Text style={styles.boutonTexte}> Retour</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bulleJoie: {
    borderRadius: 36,
    backgroundColor: "rgba(255, 217, 144, 1)",
    height: 90,
    alignItems: "center",
    top: 20,
    marginHorizontal: 75,
    marginBottom: 20,
    marginTop: 29,
  },

  titreJoie: {
    flex: 1,
    fontSize: 20,
    marginTop: 11,
    fontWeight: "300",
  },

  sousTitreJoie: {
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

  souvenir: {
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 40,
  },

  boutonRetourJoie: {
    marginLeft: 260,
    borderRadius: 100,
    height: 50,
    width: 100,
    marginTop: 30,
    backgroundColor: "rgba(255, 217, 144, 1)",
    marginBottom: 20,
  },

  souvenirJoie: {
    backgroundColor: "rgba(260, 240, 204, 10)",
    borderRadius: 20,
    marginTop: 15,
    marginHorizontal: 15,
    height: 350,
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

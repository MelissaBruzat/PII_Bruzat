import {
  setStatusBarNetworkActivityIndicatorVisible,
  StatusBar,
} from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
  useColorScheme,
  FlatList,
} from "react-native";
import user, { User } from "../../services/user";
import MemoTristesse from "../../components/MemoTristesse";
import { NouveauMemoTristesse } from "../../components/NouveauMemoTristesse";
export default function HistoriqueTristesse({ navigation }) {
  const [memoTristesse, setMemoTristesse] = useState([
    { text: user.users[0].tristesse[0], key: "1" },
    { text: user.users[0].tristesse[1], key: "2" },
    { text: user.users[0].tristesse[2], key: "3" },
  ]);

  const pressHandler = (key) => {
    setMemoTristesse((prevMemoTristesse) => {
      return prevMemoTristesse.filter(
        (memoTristesse) => memoTristesse.key != key
      );
    });
  };

  const submitHandler = (text) => {
    setMemoTristesse((prevMemoTristesse) => {
      return [
        { text: text, key: Math.random().toString() },

        ...prevMemoTristesse,
      ];
    });
  };

  return (
    <View style={styles.tristesse}>
      <View style={styles.bulleTristesse}>
        <Text style={styles.titreTristesse}>
          Mes souvenirs liés à la tristesse
        </Text>
      </View>

      <View style={styles.bulleConseilTristesse}>
        <Text style={styles.consigne}>
          Pour supprimer un souvenir, cliquer dessus
        </Text>

        <View>
          <NouveauMemoTristesse submitHandler={submitHandler} />
        </View>

        <FlatList
          data={memoTristesse}
          renderItem={({ item }) => (
            <MemoTristesse item={item} pressHandler={pressHandler} />
          )}
        />
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
    borderRadius: 36,
    backgroundColor: "rgba(194, 225, 239, 1)",
    height: 80,
    alignItems: "center",
    marginHorizontal: 70,
    textAlignVertical: "center",
    marginVertical: 20,
  },

  titreTristesse: {
    flex: 1,
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 5,
    fontWeight: "300",
  },

  tristesse: {
    backgroundColor: "rgba(243, 251, 255, 1)",
    flex: 1,
  },

  boutonRetourTristesse: {
    marginRight: 90,
    marginLeft: 260,
    borderRadius: 100,
    height: 50,
    width: 100,
    backgroundColor: "rgba(194, 225, 239, 1)",
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 20,
    marginTop: 30,
  },

  bulleConseilTristesse: {
    backgroundColor: "rgba(222, 240, 248, 1)",
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 5,
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

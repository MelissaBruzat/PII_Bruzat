import { StatusBar } from "expo-status-bar";
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
import { TextInput } from "react-native-gesture-handler";

export function NouveauMemoTristesse({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (valeur) => {
    setText(valeur);
  };
  return (
    <View>
      <View style={styles.inputTristesse}>
        <TextInput
          placeholder="Nouveau souvenir..."
          onChangeText={changeHandler}
        />
      </View>

      <Pressable
        onPress={() => submitHandler(text)}
        style={styles.boutonNouveauMemoTristesse}
      >
        <Text style={styles.ajoutTexte}> Ajouter ce souvenir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  boutonNouveauMemoTristesse: {
    marginBottom: 5,
    width: 100,
    height: 45,
    borderBottomColor: "grey",
    borderRadius: 25,
    backgroundColor: "rgba(194, 225, 239, 1)",
    justifyContent: "center",
    marginHorizontal: 110,
  },

  ajoutTexte: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "300",
  },

  inputTristesse: {
    marginVertical: 15,
    backgroundColor: "rgba(246, 253, 255, 1)",
    marginHorizontal: 20,
    borderRadius: 8,
    height: 25,
    justifyContent: "center",
  },
});

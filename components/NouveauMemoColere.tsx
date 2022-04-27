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

export function NouveauMemoColere({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (valeur) => {
    setText(valeur);
  };
  return (
    <View>
      <View style={styles.inputColere}>
        <TextInput
          placeholder="Nouveau souvenir..."
          onChangeText={changeHandler}
        />
      </View>

      <Pressable
        onPress={() => submitHandler(text)}
        style={styles.boutonNouveauMemoColere}
      >
        <Text style={styles.ajoutTexte}> Ajouter ce souvenir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  boutonNouveauMemoColere: {
    marginBottom: 5,
    width: 100,
    height: 45,
    borderBottomColor: "grey",
    borderRadius: 25,
    backgroundColor: "rgba(251, 122, 127, 1)",
    justifyContent: "center",
    marginHorizontal: 115,
  },

  ajoutTexte: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "300",
  },

  inputColere: {
    marginVertical: 15,
    backgroundColor: "rgba(255, 249, 249, 1)",
    marginHorizontal: 20,
    borderRadius: 8,
    height: 25,
    justifyContent: "center",
  },
});

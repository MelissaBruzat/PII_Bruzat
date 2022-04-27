import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

export default function MemoColere({ item, pressHandler }) {
  return (
    <Pressable onPress={() => pressHandler(item.key)}>
      <View style={styles.memoColere}>
        <Text style={styles.memo}> {item.text} </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  memo: {
    padding: 16,
    marginTop: 15,
    borderRadius: 20,
    marginHorizontal: 20,
    fontWeight: "300",
  },

  memoColere: {
    backgroundColor: "rgba(244, 203, 205, 1)",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

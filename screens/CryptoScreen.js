import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function CryptoScreen({ route, navigation }) {
  const { name } = route.params;
  const { price } = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Text>Home</Text>
      </TouchableOpacity>
      <Text>{name}</Text>
      <Text>$ {price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

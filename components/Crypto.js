import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Crypto({ crypto, navigation }) {
  const [price, setPrice] = useState(false);

  const handleSubmit = (name, price) => {
    navigation.navigate("Crypto", { name: name, price: price });
  };

  useEffect(() => {
    if (crypto.current_price > crypto.low_24h) {
      setPrice(true);
    }
  }, []);

  return (
    <View
      style={{
        height: 150,
        width: 170,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: price ? "#6DB76B" : "#E5595F",
        borderRadius: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => handleSubmit(crypto.name, crypto.current_price)}
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text>{crypto.name}</Text>
        <Text>$ {crypto.current_price}</Text>
        <Image
          style={{ height: 40, width: 40 }}
          source={{ uri: crypto.image }}
        />
      </TouchableOpacity>
    </View>
  );
}

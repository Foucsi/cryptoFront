import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Crypto from "../components/Crypto";

export default function WelcomeSreen() {
  const [arrayCryptos, setArrayCryptos] = useState([]);
  const users = useSelector((state) => state.user.value);

  const listingCrypto = arrayCryptos.map((crypto, index) => {
    return <Crypto key={index} crypto={crypto} />;
  });

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setArrayCryptos(data);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "80%",
        }}
      >
        <ScrollView style={{ flex: 1, padding: 20 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {listingCrypto}
          </View>
        </ScrollView>
      </View>
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

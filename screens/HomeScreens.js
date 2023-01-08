import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function HomeScreens({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/btc.jpg")}
        style={{ height: "100%", width: "100%", justifyContent: "center" }}
      >
        <View
          style={{
            width: "100%",
            height: "50%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Signin")}
            style={{
              width: "50%",
              height: "10%",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#fff",
              borderWidth: 2,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              height: "10%",
              alignItems: "center",
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import fetchIp from "../fetchIp.json";
import { login } from "../reducers/user";
import { useDispatch } from "react-redux";

export default function SignupScreen({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState("");

  const handleRegister = () => {
    fetch(`http://${fetchIp.myIp}:3000/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          console.log(data.result);
          dispatch(
            login({
              username: data.user.username,
              password: data.user.password,
              token: data.user.token,
            })
          );
          navigation.navigate("Welcome");
          setUsername("");
          setPassword("");
          setMsg("");
        } else if (data.error === "Missing or empty fields") {
          setMsg("Missing or empty fields");
        } else if (data.error === "User not found or wrong password") {
          setMsg(
            <View>
              <Text>User not found or wrong password</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={{ textDecorationLine: "underline" }}>Signup</Text>
              </TouchableOpacity>
            </View>
          );
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{ paddingBottom: 10 }}>Signin</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          autoCapitalize={false}
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
          autoCapitalize={false}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text>{msg}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleRegister()}
        style={{
          padding: 10,
          borderColor: "orange",
          borderWidth: 2,
          marginTop: 20,
          borderRadius: 10,
          width: "50%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Connection</Text>
      </TouchableOpacity>
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
  containerInput: {
    backgroundColor: "orange",
    height: "30%",
    width: "80%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: "80%",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    paddingBottom: 10,
    color: "#fff",
  },
});

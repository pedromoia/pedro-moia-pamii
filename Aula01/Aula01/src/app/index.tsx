import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function Index() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (usuario === "" || senha === "") {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    Alert.alert("Login", "Login realizado!");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        INSTAGRAM
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Telefone, nome de usuário ou email"
        placeholderTextColor="#8e8e8e"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#8e8e8e"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={entrar}
      >
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.esqueceu}>
          Esqueceu a senha?
        </Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.linha} />

        <Text style={styles.ou}>
          OU
        </Text>

        <View style={styles.linha} />
      </View>

      <TouchableOpacity>
        <Text style={styles.facebook}>
          Entrar com Facebook
        </Text>
      </TouchableOpacity>

      <View style={styles.cadastroContainer}>
        <Text style={styles.cadastroTexto}>
          Não tem uma conta?
        </Text>

        <TouchableOpacity>
          <Text style={styles.cadastro}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  logo: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#262626",
    marginBottom: 40,
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 14,
  },

  botao: {
    width: "100%",
    height: 45,
    backgroundColor: "#0095f6",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },

  esqueceu: {
    color: "#00376b",
    fontSize: 13,
    marginTop: 18,
  },

  divisor: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "#dbdbdb",
  },

  ou: {
    color: "#737373",
    fontSize: 12,
    fontWeight: "bold",
    marginHorizontal: 15,
  },

  facebook: {
    color: "#385185",
    fontWeight: "bold",
    fontSize: 14,
  },

  cadastroContainer: {
    flexDirection: "row",
    marginTop: 40,
  },

  cadastroTexto: {
    color: "#737373",
  },

  cadastro: {
    color: "#0095f6",
    fontWeight: "bold",
    marginLeft: 5,
  },

});


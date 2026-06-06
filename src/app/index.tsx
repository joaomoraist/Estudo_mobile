import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { getUsers } from "../services/api";

export default function Index() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const data = await getUsers();
      setUsers(data);
    }

    loadUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{ width: 50, height: 50 }}
      />
      <Text style={styles.title}>Olá, Dev!!</Text>
      <Text style={styles.text}>Bem vindo ao seu aplicativo!</Text>

      <View style={styles.form}>
        <Input placeholder="Digite seu e-mail..." />
        <Input placeholder="Digite sua senha..." secureTextEntry={true} />
        <Button label="Entrar" onPress={() => alert("Botão Pressionado!")} />
      </View>

      <Text style={styles.rodape}>
        Não tem uma conta? Cadastre-se!{" "}
        <Link style={styles.link} href="/signup">
          Clique aqui
        </Link>
      </Text>

      <View>
        <Text style={styles.rodape}>Criadores do Site:</Text>
        {users.map((user: any) => (
          <Text style={styles.rodape2} key={user.id}>
            {user.name}
          </Text>
        ))}
      </View>
    </View>
  );
}
// O Link é um componente do Expo Router que permite navegar entre as telas do aplicativo.

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cdcdcd",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: "#0f0f0f",
  },
  form: {
    marginTop: 20,
  },
  rodape: {
    marginTop: 20,
    fontSize: 14,
    color: "#0f0f0f95",
  },
  rodape2: {
    marginTop: 1,
    fontSize: 14,
    color: "#0f0f0f95",
    fontStyle: "italic",
  },
  link: {
    color: "#0032c9b6",
    textDecorationLine: "underline",
  },
});

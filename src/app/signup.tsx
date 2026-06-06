import { Input } from "@/components/Input";
import { StyleSheet, Text, View } from "react-native";

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <Text style={styles.text}>Aqui você pode criar uma nova conta!</Text>

      <View style={styles.form}>
        <Input placeholder="Digite seu nome..." />
        <Input placeholder="Digite seu e-mail..." />
        <Input placeholder="Digite sua senha..." secureTextEntry={true} />
      </View>
    </View>
  );
}

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
});

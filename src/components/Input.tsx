import { StyleSheet, TextInput, TextInputProps } from "react-native";
// Caixa de Entrada, é um componente que permite ser chamado quando quiser.
// Props = Deixar o componente mais flexível, podendo receber informações de fora, e não ser algo fixo.
// ...Rest = Pega todas as propriedades que o TextInputProps tem.
export function Input({ ...rest }: TextInputProps) {
  return <TextInput style={styles.input} {...rest} />;
}
const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

# 📚 Guia de Estudos React Native com Expo

## Objetivo

Este projeto foi desenvolvido para demonstrar os principais conceitos cobrados na prova:

* Criação de projetos React Native utilizando Expo;
* Consumo de APIs e manipulação de dados;
* Navegação entre telas utilizando rotas;
* Desenvolvimento e estruturação de layouts.

---

# 1. Criando um Projeto React Native com Expo

## Instalação do Expo

```bash
npm install -g expo-cli
```

## Criando um novo projeto

```bash
npx create-expo-app meu-app
```

## Executando o projeto

```bash
npm start
```

ou

```bash
npx expo start
```

O Expo abrirá um painel onde é possível executar o aplicativo em:

* Android
* iOS
* Navegador

---

# 2. Estrutura do Projeto

```text
src
├── app
│   ├── index.tsx
│   ├── signup.tsx
│
├── components
│
├── services
│   └── api.ts
│
└── assets
```

### Função de cada pasta

#### app

Contém as telas da aplicação.

Exemplo:

```text
index.tsx
```

Tela inicial.

```text
signup.tsx
```

Tela de cadastro.

---

#### components

Armazena componentes reutilizáveis.

Exemplo:

```text
Button.tsx
Input.tsx
```

Esses componentes podem ser utilizados em várias telas.

---

#### services

Responsável por armazenar serviços da aplicação.

Exemplo:

```text
api.ts
```

Arquivo responsável por consumir APIs.

---

# 3. Desenvolvimento de Layouts

No React Native não utilizamos HTML.

Utilizamos componentes próprios.

## Principais Componentes

### View

Equivalente a uma div.

```tsx
<View>
  <Text>Olá</Text>
</View>
```

---

### Text

Exibe textos na tela.

```tsx
<Text>Olá Mundo</Text>
```

---

### Image

Exibe imagens.

```tsx
<Image
  source={{
    uri: "https://reactnative.dev/img/tiny_logo.png",
  }}
/>
```

---

### StyleSheet

Responsável pela estilização.

```tsx
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
```

---

## Flexbox

O React Native utiliza Flexbox por padrão.

### Centralização

```tsx
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}
```

### O que significa?

```text
flex: 1
→ ocupa toda a tela

justifyContent
→ eixo vertical

alignItems
→ eixo horizontal
```

---

# 4. Navegação entre Telas

Este projeto utiliza Expo Router.

## Tela Inicial

```text
index.tsx
```

## Tela Cadastro

```text
signup.tsx
```

---

## Criando um Link

```tsx
<Link href="/signup">
  Clique aqui
</Link>
```

### O que acontece?

```text
Usuário clica
↓
Expo Router encontra signup.tsx
↓
Nova tela é aberta
```

---

## Estrutura de Rotas

```text
app
├── index.tsx
└── signup.tsx
```

Rotas geradas automaticamente:

```text
/          → index.tsx
/signup    → signup.tsx
```

---

# 5. Consumo de APIs

## O que é uma API?

Uma API é um serviço que fornece dados para nossa aplicação.

Neste projeto foi utilizada:

```text
https://jsonplaceholder.typicode.com
```

---

## Arquivo api.ts

```ts
const API_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();

  return data;
}
```

---

## Explicação

### Endereço da API

```ts
const API_URL = "https://jsonplaceholder.typicode.com";
```

Define o endereço principal.

---

### Fazendo a requisição

```ts
await fetch(`${API_URL}/users`);
```

Busca os usuários da API.

---

### Convertendo para JSON

```ts
await response.json();
```

Transforma os dados em um formato que o JavaScript entende.

---

### Retornando os dados

```ts
return data;
```

Entrega os usuários para a tela.

---

# 6. Manipulação de Dados

## Criando um Estado

```tsx
const [users, setUsers] = useState([]);
```

### O que significa?

```text
users
→ guarda os usuários

setUsers
→ atualiza os usuários
```

---

## useEffect

```tsx
useEffect(() => {
  async function loadUsers() {
    const data = await getUsers();
    setUsers(data);
  }

  loadUsers();
}, []);
```

### O que acontece?

Quando a tela abre:

```text
Tela abre
↓
loadUsers()
↓
getUsers()
↓
API responde
↓
setUsers(data)
↓
Tela atualiza
```

---

# 7. Exibindo Dados da API

## Utilizando map()

```tsx
{
  users.map((user: any) => (
    <Text key={user.id}>
      {user.name}
    </Text>
  ));
}
```

---

### Exemplo

Se a API retornar:

```js
[
  {
    id: 1,
    name: "João"
  },
  {
    id: 2,
    name: "Maria"
  }
]
```

Resultado:

```text
João
Maria
```

---

# 8. Componentização

## O que é um componente?

Um componente é uma parte reutilizável da interface.

Exemplo:

```tsx
<Input />
```

e

```tsx
<Button />
```

Podem ser utilizados em várias telas.

---

## Vantagens

* Reutilização de código;
* Organização;
* Facilidade de manutenção;
* Menos repetição.

---

# 9. Fluxo Completo da Aplicação

```text
Usuário abre o App
↓
index.tsx é carregado
↓
useEffect executa
↓
getUsers()
↓
fetch()
↓
API responde
↓
response.json()
↓
setUsers(data)
↓
users recebe os dados
↓
map() percorre os usuários
↓
Dados aparecem na tela
```

---

# 10. Resumo para a Prova

## Criar Projeto Expo

```bash
npx create-expo-app nome-do-projeto
```

---

## Consumir API

```ts
const response = await fetch(URL);
const data = await response.json();
```

---

## Criar Estado

```ts
const [dados, setDados] = useState([]);
```

---

## Executar ao abrir a tela

```ts
useEffect(() => {
}, []);
```

---

## Navegar entre telas

```tsx
<Link href="/signup">
```

---

## Mostrar listas

```tsx
dados.map(...)
```

---

## Componentes principais

```text
View
Text
Image
StyleSheet
```

---

# Perguntas que podem cair na prova

### O que é uma API?

É um serviço que fornece dados para uma aplicação.

---

### Qual a função do useState?

Armazenar e atualizar dados na tela.

---

### Qual a função do useEffect?

Executar ações quando a tela é carregada.

---

### Para que serve o fetch?

Fazer requisições para APIs.

---

### Para que serve o response.json()?

Converter a resposta para JSON.

---

### Para que serve o map()?

Percorrer listas e exibir informações na tela.

---

### O que é um componente?

Uma parte reutilizável da interface.

---

### Como navegar entre telas?

Utilizando o componente Link do Expo Router.

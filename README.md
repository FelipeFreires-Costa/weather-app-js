# 🌤️ Weather App (App de Clima)

Esta aplicação demonstra a capacidade de buscar dados de fontes externas e manipulá-los dinamicamente no Front-end.

## 🚀 Funcionalidades Principais

O aplicativo permite ao usuário:
* Inserir o nome de uma cidade e submeter a busca.
* Exibir a temperatura atual, condição climática e um emoji relevante.
* **Tratar erros** de forma elegante quando a cidade não é encontrada.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica da aplicação.
* **CSS3:** Estilização limpa e minimalista.
* **JavaScript (ES6+):** Lógica principal do aplicativo.
    * Manipulação do DOM (`getElementById`, `addEventListener`).
    * Programação Assíncrona (`async/await` e `fetch`).
    * Tratamento de erros (`try...catch`).

## 🧠 Principais Desafios e Soluções

1.  **Comunicação com API:** Utilização do `fetch()` para fazer a requisição assíncrona à **OpenWeatherMap API**.
2.  **Exibição Dinâmica:** Manipulação do DOM para injetar os dados (temperatura, condição) na tela após a resposta da API.
3.  **Robustez:** Implementação do bloco **`try...catch`** para garantir que o aplicativo não quebre caso a cidade digitada não exista (tratando o `fetch` com `resposta.ok`).

---

### 🔗 Demonstração

*(Nesta seção, você pode adicionar um GIF gravado de você usando o app ou um link para a versão publicada se já tiver feito o deploy.)*

[Link para o Projeto Online (Netlify/GitHub Pages)]

---

### 🚀 Próximos Passos (Para demonstrar visão de futuro)

Pretendo aprimorar este projeto adicionando:
* Armazenamento do último clima buscado usando `localStorage`.
* Validação de input mais rigorosa.

# SpeakNotes

**SpeakNotes** é um aplicativo de notas intuitivo que combina organização e tecnologia. Com funcionalidades para criação e gerenciamento de notas, categorização, reconhecimento de voz e temas personalizáveis, o SpeakNotes é perfeito para quem busca eficiência e flexibilidade na organização de tarefas e ideias.

![Gif do SpeakNotes](./src/assets/README/speaknotes.gif)

## Funcionalidades Principais

- **Criação e Gerenciamento de Notas**: Adicione, edite e exclua notas facilmente.
- **Categorias**: Organize suas notas em diversas categorias como "Tarefas", "Trabalho", "Estudos", entre outras.
- **Reconhecimento de Voz**: Use comandos de voz para adicionar títulos e textos às suas notas.
- **Temas**: Altere entre modos claro e escuro com um simples clique.
- **Interface Responsiva**: Adaptável para diferentes tamanhos de tela, incluindo dispositivos móveis.

## Tecnologias Usadas

- **Frontend**: HTML, CSS, JavaScript e React
- **Reconhecimento de Voz**: Web Speech API
- **Armazenamento**: LocalStorage
- **Ícones**: Remix Icon

## Estrutura do Projeto

### Arquivos e Diretórios

- `src/`
  - `components/`
    - `Categories.jsx`: Componente para exibição das categorias e criação de novas notas.
    - `Header.jsx`: Componente de cabeçalho com funcionalidade de categorias e alternância de temas.
    - `MobileMenu.jsx`: Menu móvel para dispositivos com telas menores.
    - `Note.jsx`: Componente para exibição e edição de notas individuais.
    - `SectionHeader.jsx`: Componente de cabeçalho da seção com gerenciamento de notas.
    - `ThemeSwitch.jsx`: Componente para alternar entre os temas claro e escuro.

  - `js/`
      - `icons.mjs`: Funções auxiliares para obter ícones baseados em classes.
      - `speechRecognition.mjs`: Manipulação do reconhecimento de voz.
      - `transformData.mjs`: Funções para transformar dados das notas.
  - `css/`
    - `Categories.css`: Estilos para o componente das categorias.
    - `Header.css`: Estilos para o componente Header.
    - `index.css`: Estilos globais.
    - `MobileMenu.css`: Estilos para o componente MobileMenu.
    - `Note.css`: Estilos para o componente Note.
    - `SectionHeader.css`: Estilos para o componente SectionHeader.
    - `ThemeSwitch.css`: Estilos para o componente ThemeSwitch.
  - `App.jsx`: Componente principal que gerencia o estado global.
  - `main.jsx`: Ponto de entrada do projeto React.

### Componentes

- **`App.jsx`**: O componente principal que gerencia o estado global das notas, categorias, tema e menu.
- **`Header.jsx`**: Exibe o título do aplicativo e um botão para criar novas notas, além de mostrar ou ocultar o menu de categorias.
- **`SectionHeader.jsx`**: Gerencia a visualização das notas por categoria e contém funcionalidades de edição e exclusão de notas.
- **`Note.jsx`**: Representa uma nota individual com opções para edição, exclusão e reconhecimento de voz.
- **`Categories.jsx`**: Exibe e permite a seleção de categorias, além de criar novas notas.
- **`ThemeSwitch.jsx`**: Permite alternar entre os temas claro e escuro.
- **`MobileMenu.jsx`**: Fornece uma interface de menu para dispositivos móveis.

## Uso

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/ThiagoBRG60/SpeakNotes.git
```
Agora, dentro da pasta principal do SpeakNotes, instale as dependências com o seguinte comando:

```bash
npm install
```

### Execução

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```
Acesse o projeto no link que o vite fornece.

## Contribuição

Para contribuir com o projeto, siga estas etapas:

- Faça um fork do repositório.
- Crie uma branch para sua feature ou correção.
- Faça suas alterações e commit.
- Envie um pull request para a branch main.
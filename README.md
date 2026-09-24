# AlgoLab - Algoritmos Front-End

Aplicação web para explorar e executar exemplos de algorítmos em Java e JavaScript. A interface funciona diretamente no navegador e não exige um servidor backend.

## Requisitos

- [Visual Studio Code](https://code.visualstudio.com/)
- Um navegador atualizado, como Google Chrome, Microsoft Edge ou Mozilla Firefox
- Git, caso o projeto seja obtido de um repositório remoto

Java e Node.js não são necessários para abrir a interface. Eles são opcionais caso voce queira executar os arquivos-fonte Java ou JavaScript diretamente pelo terminal.

## 1. Obter e sincronizar o projeto no VS Code

### Opção A: clonar um repositório Git

1. Instale o Git, se ainda não estiver instalado.
2. Abra o VS Code.
3. Abra o terminal integrado pelo menu **Terminal > Novo Terminal**.
4. Navegue ate a pasta onde deseja salvar o projeto:

   ```powershell
   cd "C:\caminho\onde\deseja\salvar"
   ```

5. Clone o repositorio:

   ```powershell
   git clone URL_DO_REPOSITORIO
   ```

6. Entre na pasta do projeto e abra-a no VS Code:

   ```powershell
   cd AlgoritmosFront-End
   code .
   ```

7. Para sincronizar alterações futuras com o repositório, use o menu **Source Control** do VS Code e clique em **Sync Changes**. Pelo terminal, o comando equivalente é:

   ```powershell
   git pull
   ```

> Substitua `URL_DO_REPOSITORIO` pelo endereço Git fornecido pelo responsável pelo projeto.

### Opção B: abrir uma pasta já existente

1. Extraia ou copie a pasta `AlgoritmosFront-End` para o computador.
2. No VS Code, selecione **File > Open Folder...**.
3. Escolha a pasta `AlgoritmosFront-End`.
4. Confirme que a arvore de arquivos contem `index.html`, `app.js` e `styles.css` na raiz.

## 2. Executar a aplicação

### Forma mais simples: abrir o HTML

1. No Explorer do VS Code, clique com o botão direito em `index.html`.
2. Selecione **Reveal in File Explorer**.
3. Na pasta aberta, clique duas vezes em `index.html`.
4. A aplicação será aberta no navegador.

Tambem é possivel arrastar o arquivo `index.html` para uma janela do navegador.

### Opção recomendada: extensão Live Server

A extensão Live Server atualiza o navegador automaticamente quando os arquivos são alterados.

1. No VS Code, abra **Extensions** (`Ctrl+Shift+X`).
2. Pesquise por **Live Server**, de autoria de Ritwick Dey.
3. Instale a extensao.
4. Abra o arquivo `index.html`.
5. Clique em **Go Live** no canto inferior direito do VS Code.
6. O navegador abrira um endereco semelhante a `http://127.0.0.1:5500/index.html`.

Para encerrar, clique novamente em **Port: 5500** na barra de status ou feche o servidor pelo terminal.

## 3. Usar a aplicação

1. Escolha **Java** ou **JavaScript** no menu lateral.
2. Selecione um algorítmo.
3. Informe ou altere os parâmetros de entrada.
4. Clique em **Executar** ou use `Ctrl+Enter`.
5. Veja o resultado no painel de saída.

O código exibido no editor pode ser alterado e restaurado pelo botao de redefinição.

### Observação sobre Java

Os algoritmos Java exibidos na interface são simulados no navegador por funções equivalentes em JavaScript. A aplicacao não compila nem executa um arquivo `.java` durante o uso da página.

## 4. Estrutura principal

```text
AlgoritmosFront-End/
|-- index.html          # Pagina principal
|-- app.js              # Navegacao e execucao dos algoritmos
|-- styles.css          # Estilos da interface
|-- Java/algoritmos/    # Implementacoes em Java
`-- JS/                 # Implementacoes em JavaScript
```

## 5. Executar os arquivos-fonte opcionalmente

### Java

Instale o JDK e confirme a instalação:

```powershell
java --version
javac --version
```

Para compilar e executar o exemplo principal:

```powershell
cd Java\algoritmos
javac *.java
java Main
```

### JavaScript com Node.js

Instale o Node.js e confirme a instalação:

```powershell
node --version
npm --version
```

Os scripts em `JS/` podem ser executados individualmente, por exemplo:

```powershell
cd JS
node Fibonacci.js
```

O arquivo `JS/package.json` possui a dependência `prompt-sync`. Para instalá-la, execute dentro da pasta `JS`:

```powershell
npm install
```

Esses comandos são independentes da abertura do `index.html` no navegador.

## Solucao de problemas

- **A página aparece sem estilos:** confirme que `styles.css` esta na mesma pasta de `index.html`.
- **Os botões não funcionam:** confirme que `app.js` está na mesma pasta de `index.html` e recarregue a página.
- **O Live Server não abre:** verifique se a extensão está instalada e tente abrir o `index.html` pelo Explorer do VS Code.
- **As alterações não aparecem:** salve os arquivos com `Ctrl+S` e recarregue a página com `Ctrl+R`.

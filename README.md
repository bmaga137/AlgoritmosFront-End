# AlgoLab - Algoritmos Front-End

Aplicacao web para explorar e executar exemplos de algoritmos em Java e JavaScript. A interface funciona diretamente no navegador e nao exige um servidor backend.

## Requisitos

- [Visual Studio Code](https://code.visualstudio.com/)
- Um navegador atualizado, como Google Chrome, Microsoft Edge ou Mozilla Firefox
- Git, caso o projeto seja obtido de um repositorio remoto

Java e Node.js nao sao necessarios para abrir a interface. Eles sao opcionais caso voce queira executar os arquivos-fonte Java ou JavaScript diretamente pelo terminal.

## 1. Obter e sincronizar o projeto no VS Code

### Opcao A: clonar um repositorio Git

1. Instale o Git, se ainda nao estiver instalado.
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

7. Para sincronizar alteracoes futuras com o repositorio, use o menu **Source Control** do VS Code e clique em **Sync Changes**. Pelo terminal, o comando equivalente e:

   ```powershell
   git pull
   ```

> Substitua `URL_DO_REPOSITORIO` pelo endereco Git fornecido pelo responsavel pelo projeto.

### Opcao B: abrir uma pasta ja existente

1. Extraia ou copie a pasta `AlgoritmosFront-End` para o computador.
2. No VS Code, selecione **File > Open Folder...**.
3. Escolha a pasta `AlgoritmosFront-End`.
4. Confirme que a arvore de arquivos contem `index.html`, `app.js` e `styles.css` na raiz.

## 2. Executar a aplicacao

### Forma mais simples: abrir o HTML

1. No Explorer do VS Code, clique com o botao direito em `index.html`.
2. Selecione **Reveal in File Explorer**.
3. Na pasta aberta, clique duas vezes em `index.html`.
4. A aplicacao sera aberta no navegador.

Tambem e possivel arrastar o arquivo `index.html` para uma janela do navegador.

### Opcao recomendada: extensao Live Server

A extensao Live Server atualiza o navegador automaticamente quando os arquivos sao alterados.

1. No VS Code, abra **Extensions** (`Ctrl+Shift+X`).
2. Pesquise por **Live Server**, de autoria de Ritwick Dey.
3. Instale a extensao.
4. Abra o arquivo `index.html`.
5. Clique em **Go Live** no canto inferior direito do VS Code.
6. O navegador abrira um endereco semelhante a `http://127.0.0.1:5500/index.html`.

Para encerrar, clique novamente em **Port: 5500** na barra de status ou feche o servidor pelo terminal.

## 3. Usar a aplicacao

1. Escolha **Java** ou **JavaScript** no menu lateral.
2. Selecione um algoritmo.
3. Informe ou altere os parametros de entrada.
4. Clique em **Executar** ou use `Ctrl+Enter`.
5. Veja o resultado no painel de saida.

O codigo exibido no editor pode ser alterado e restaurado pelo botao de redefinicao.

### Observacao sobre Java

Os algoritmos Java exibidos na interface sao simulados no navegador por funcoes equivalentes em JavaScript. A aplicacao nao compila nem executa um arquivo `.java` durante o uso da pagina.

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

Instale o JDK e confirme a instalacao:

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

Instale o Node.js e confirme a instalacao:

```powershell
node --version
npm --version
```

Os scripts em `JS/` podem ser executados individualmente, por exemplo:

```powershell
cd JS
node Fibonacci.js
```

O arquivo `JS/package.json` possui a dependencia `prompt-sync`. Para instala-la, execute dentro da pasta `JS`:

```powershell
npm install
```

Esses comandos sao independentes da abertura do `index.html` no navegador.

## Solucao de problemas

- **A pagina aparece sem estilos:** confirme que `styles.css` esta na mesma pasta de `index.html`.
- **Os botoes nao funcionam:** confirme que `app.js` esta na mesma pasta de `index.html` e recarregue a pagina.
- **O Live Server nao abre:** verifique se a extensao esta instalada e tente abrir o `index.html` pelo Explorer do VS Code.
- **As alteracoes nao aparecem:** salve os arquivos com `Ctrl+S` e recarregue a pagina com `Ctrl+R`.

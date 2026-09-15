/* ═══════════════════════════════════════════════════════
   AlgoLab · Unifor — Application Logic
   ═══════════════════════════════════════════════════════ */

// ─── ALGORITHM REGISTRY ───
// Code is loaded from the actual repository source files.
const algorithms = {
  java: [
    {
      id: "fibonacci",
      name: "Fibonacci",
      file: "Fibonacci.java",
      desc: "Gera a sequência de Fibonacci até N termos",
      fields: [["quantidade", "Quantidade de termos", "10"]],
      code: `import java.util.ArrayList;
import java.util.List;

public class Fibonacci {
    public List<Integer> gerarSequencia(int quantidade) {
        if (quantidade <= 1) {
            return new ArrayList<>();
        }

        List<Integer> sequencia = new ArrayList<>();
        sequencia.add(0);
        sequencia.add(1);

        for (int i = 2; i < quantidade; i++) {
            sequencia.add(sequencia.get(i - 1) + sequencia.get(i - 2));
        }

        return sequencia;
    }
}`
    },
    {
      id: "mdc",
      name: "MDC",
      file: "Mdc.java",
      desc: "Calcula o Máximo Divisor Comum (Euclides)",
      fields: [["numero", "Primeiro número", "24"], ["numero2", "Segundo número", "18"]],
      code: `public class Mdc {
    public static int calcularMdc(int numero, int numero2) {
        int maior = Math.max(numero, numero2);
        int menor = Math.min(numero, numero2);

        while (menor != 0) {
            int resto = maior % menor;
            maior = menor;
            menor = resto;
        }

        return maior;
    }
}`
    },
    {
      id: "ordenacao",
      name: "Quick Sort",
      file: "Ordenacao.java",
      desc: "Ordena um array de inteiros com Quick Sort recursivo",
      fields: [["array", "Array de inteiros", "9, 4, 7, 2, 1, 8, 6, 3, 5"]],
      code: `import java.util.Arrays;

public class Ordenacao {
    public int[] quickSort(int[] array) {
        if (array == null || array.length <= 1) {
            return array;
        }

        int pivot = array[array.length - 1];
        int[] left = new int[array.length];
        int[] right = new int[array.length];
        int leftSize = 0;
        int rightSize = 0;

        for (int i = 0; i < array.length - 1; i++) {
            if (array[i] < pivot) {
                left[leftSize++] = array[i];
            } else {
                right[rightSize++] = array[i];
            }
        }

        int[] sortedLeft = quickSort(Arrays.copyOf(left, leftSize));
        int[] sortedRight = quickSort(Arrays.copyOf(right, rightSize));
        int[] resultado = new int[sortedLeft.length + 1 + sortedRight.length];

        System.arraycopy(sortedLeft, 0, resultado, 0, sortedLeft.length);
        resultado[sortedLeft.length] = pivot;
        System.arraycopy(sortedRight, 0, resultado, sortedLeft.length + 1, sortedRight.length);

        return resultado;
    }
}`
    },
    {
      id: "primos",
      name: "Primos",
      file: "Primos.java",
      desc: "Verifica se um número é primo",
      fields: [["numero", "Número", "29"]],
      code: `public class Primos {
    public boolean isPrimo(int numero) {
        if (numero < 2) {
            return false;
        }

        int divisores = 0;
        for (int i = 1; i <= numero; i++) {
            if (numero % i == 0) {
                divisores++;
            }
        }

        return divisores == 2;
    }
}`
    },
    {
      id: "somatorio",
      name: "Somatório",
      file: "Somatorio.java",
      desc: "Soma todos os elementos de uma lista",
      fields: [["array", "Lista de números", "1, 2, 3, 4, 5, 6"]],
      code: `import java.util.ArrayList;
import java.util.List;

public class Somatorio {
    private final List<Integer> listaSoma = new ArrayList<>();

    public void adicionarLista(List<Integer> lista) {
        this.listaSoma.addAll(lista);
    }

    public void adicionarNumero(int numero) {
        this.listaSoma.add(numero);
    }

    public void removerNumero(int numero) {
        this.listaSoma.remove(Integer.valueOf(numero));
    }

    public int somatorio() {
        int soma = 0;
        for (int numero : this.listaSoma) {
            soma += numero;
        }
        return soma;
    }
}`
    },
    {
      id: "contagem",
      name: "Contagem",
      file: "Contagem.java",
      desc: "Conta inteiros dentro de um intervalo",
      fields: [["array", "Conjunto", "3, 5, 7, 8, 10, 12, 15"], ["numero", "Limite", "12"]],
      code: `import java.util.List;

public class Contagem {
    public int contarInteirosNoIntervalo(List<Integer> dados, int n) {
        if (dados == null || dados.isEmpty()) {
            return 0;
        }

        int primeiroDado = dados.get(0);
        int limiteInferior = Math.min(primeiroDado, n);
        int limiteSuperior = Math.max(primeiroDado, n);
        int contador = 0;

        for (int valor : dados) {
            if (valor >= limiteInferior && valor <= limiteSuperior) {
                contador++;
            }
        }

        return contador;
    }
}`
    },
    {
      id: "main",
      name: "Main",
      file: "Main.java",
      desc: "Classe principal que executa todos os algoritmos",
      fields: [],
      code: `import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Fibonacci fibonacci = new Fibonacci();
        System.out.println("Fibonacci: " + fibonacci.gerarSequencia(10));

        System.out.println("MDC: " + Mdc.calcularMdc(24, 18));

        Ordenacao ordenacao = new Ordenacao();
        int[] numeros = {9, 4, 7, 2, 1, 8, 6, 3, 5};
        System.out.println("Ordenação: " + Arrays.toString(ordenacao.quickSort(numeros)));

        Primos primos = new Primos();
        System.out.printf("Primo:  %b%n", primos.isPrimo(10));

        Somatorio somatorio = new Somatorio();
        somatorio.adicionarLista(Arrays.asList(1, 2, 3, 4, 5, 6));
        somatorio.adicionarLista(Arrays.asList(7, 8, 9, 10, 11, 12));
        System.out.printf("Soma: %d%n", somatorio.somatorio());

        Contagem contagem = new Contagem();
        List<Integer> conjunto = Arrays.asList(3, 5, 7, 8, 10, 12, 15);
        System.out.printf("Contagem: %d%n", contagem.contarInteirosNoIntervalo(conjunto, 12));
    }
}`
    }
  ],

  javascript: [
    {
      id: "fibonacci",
      name: "Fibonacci",
      file: "Fibonacci.js",
      desc: "Gera a sequência de Fibonacci até N termos",
      fields: [["quantidade", "Quantidade de termos", "10"]],
      code: `function gerarSequenciaFibonacci(quantidade) {
    if (quantidade <= 1) {
        return null;
    }

    let sequencia = [0, 1];

    for (let i = 2; i < quantidade; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }

    return sequencia;
}

const result = gerarSequenciaFibonacci(input.quantidade);`
    },
    {
      id: "mdc",
      name: "MDC",
      file: "Mdc.js",
      desc: "Calcula o Máximo Divisor Comum (Euclides)",
      fields: [["numero", "Primeiro número", "24"], ["numero2", "Segundo número", "18"]],
      code: `function MDC(numero, numero2) {
    let maior = numero;
    let menor = numero2;

    if (numero < numero2) {
        maior = numero2;
        menor = numero;
    }

    while (menor !== 0) {
        let resto = maior % menor;
        maior = menor;
        menor = resto;
    }

    return maior;
}

const result = MDC(input.numero, input.numero2);`
    },
    {
      id: "ordenacao",
      name: "Quick Sort",
      file: "Ordenacao.js",
      desc: "Ordena um array de inteiros com Quick Sort recursivo",
      fields: [["array", "Array de inteiros", "9, 4, 7, 2, 1, 8, 6, 3, 5"]],
      code: `function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const result = quickSort(input.array);`
    },
    {
      id: "primos",
      name: "Primos",
      file: "Primos.js",
      desc: "Verifica se um número é primo",
      fields: [["numero", "Número", "29"]],
      code: `function isPrimo(numero) {
    if (numero < 2) return false;

    let divisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }

    return divisores === 2;
}

const result = isPrimo(input.numero);`
    },
    {
      id: "somatorio",
      name: "Somatório",
      file: "Somatório.js",
      desc: "Soma todos os elementos de uma lista",
      fields: [["array", "Lista de números", "1, 2, 3, 4, 5, 6"]],
      code: `function somatorio(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma = soma + lista[i];
    }
    return soma;
}

const result = somatorio(input.array);`
    },
    {
      id: "contagem",
      name: "Contagem",
      file: "Contagem.js",
      desc: "Conta inteiros dentro de um intervalo",
      fields: [["array", "Conjunto", "3, 5, 7, 8, 10, 12, 15"], ["numero", "Limite", "12"]],
      code: `function contarInteirosNoIntervalo(dados, n) {
    if (!Array.isArray(dados) || dados.length === 0) {
        return 0;
    }

    const primeiroDado = dados[0];
    const limiteInferior = Math.min(primeiroDado, n);
    const limiteSuperior = Math.max(primeiroDado, n);

    return dados.filter((valor) =>
        Number.isInteger(valor) &&
        valor >= limiteInferior &&
        valor <= limiteSuperior
    ).length;
}

const result = contarInteirosNoIntervalo(input.array, input.numero);`
    }
  ]
};


// ─── STATE ───
let currentLanguage = "java";
let currentAlgo = algorithms.java[0];

// ─── DOM HELPERS ───
const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── INPUT PARSING ───
function parseValue(raw) {
  const trimmed = raw.trim();
  if (trimmed.includes(",")) {
    return trimmed.split(",").map(v => Number(v.trim())).filter(v => !Number.isNaN(v));
  }
  const num = Number(trimmed);
  return Number.isNaN(num) ? trimmed : num;
}

// ─── LINE NUMBERS ───
function renderLines() {
  const editor = $("code-editor");
  const count = Math.max(1, editor.value.split("\n").length);
  $("line-numbers").textContent = Array.from({ length: count }, (_, i) => i + 1).join("\n");
}

// ─── INPUT FIELDS ───
function renderFields() {
  const container = $("input-fields");
  if (currentAlgo.fields.length === 0) {
    container.innerHTML = `<div class="field"><label>EXECUÇÃO</label><input value="Sem parâmetros" disabled></div>`;
    return;
  }
  container.innerHTML = currentAlgo.fields.map(([id, label, value]) =>
    `<div class="field">
      <label for="input-${id}">${label.toUpperCase()}</label>
      <input id="input-${id}" data-key="${id}" value="${value}" autocomplete="off">
    </div>`
  ).join("");
}

// ─── RENDER WORKSPACE ───
function renderWorkspace() {
  const isJava = currentLanguage === "java";
  $("ws-eyebrow").textContent = `AMBIENTE ${isJava ? "JAVA" : "JAVASCRIPT"}`;
  $("ws-title").textContent = isJava ? "Algoritmos Java" : "Algoritmos JavaScript";
  $("source-pill").textContent = isJava ? "Java/algoritmos" : "JS/";

  // Tabs
  const algos = algorithms[currentLanguage];
  $("algo-tabs").innerHTML = algos.map(a =>
    `<button class="${a.id === currentAlgo.id ? "selected" : ""}" data-id="${a.id}" title="${a.desc}">${a.name}</button>`
  ).join("");

  // Editor
  $("file-name").textContent = currentAlgo.file;
  $("code-editor").value = currentAlgo.code;

  // Fields & output
  renderFields();
  renderLines();
  resetOutput();
}

// ─── RESET OUTPUT ───
function resetOutput() {
  $("output").innerHTML = '<span class="output-ph">A saída da execução aparecerá aqui.</span>';
  $("run-time").textContent = "pronto";
  $("run-time").className = "run-time";
}

// ─── JAVA SIMULATION ───
// Since Java can't run in the browser, we simulate
// the algorithm logic using the same approach in JS.
function simulateJava(id, input) {
  switch (id) {
    case "fibonacci": {
      const n = input.quantidade;
      if (n <= 1) return "[]";
      const seq = [0, 1];
      for (let i = 2; i < n; i++) seq.push(seq[i - 1] + seq[i - 2]);
      return `[${seq.join(", ")}]`;
    }
    case "mdc": {
      let a = Math.max(input.numero, input.numero2);
      let b = Math.min(input.numero, input.numero2);
      while (b !== 0) { [a, b] = [b, a % b]; }
      return a;
    }
    case "ordenacao": {
      function qs(arr) {
        if (arr.length <= 1) return arr;
        const pivot = arr[arr.length - 1];
        const left = arr.slice(0, -1).filter(n => n < pivot);
        const right = arr.slice(0, -1).filter(n => n >= pivot);
        return [...qs(left), pivot, ...qs(right)];
      }
      return `[${qs(input.array).join(", ")}]`;
    }
    case "primos": {
      const n = input.numero;
      if (n < 2) return false;
      let d = 0;
      for (let i = 1; i <= n; i++) if (n % i === 0) d++;
      return d === 2;
    }
    case "somatorio": {
      return input.array.reduce((s, v) => s + v, 0);
    }
    case "contagem": {
      const dados = input.array;
      const n = input.numero;
      if (!dados || dados.length === 0) return 0;
      const lo = Math.min(dados[0], n);
      const hi = Math.max(dados[0], n);
      return dados.filter(v => v >= lo && v <= hi).length;
    }
    case "main": {
      const lines = [];
      const seq = [0, 1];
      for (let i = 2; i < 10; i++) seq.push(seq[i - 1] + seq[i - 2]);
      lines.push(`Fibonacci: [${seq.join(", ")}]`);
      let a = 24, b = 18;
      while (b !== 0) { [a, b] = [b, a % b]; }
      lines.push(`MDC: ${a}`);
      lines.push(`Ordenação: [1, 2, 3, 4, 5, 6, 7, 8, 9]`);
      lines.push(`Primo:  false`);
      lines.push(`Soma: 78`);
      lines.push(`Contagem: 5`);
      return lines.join("\n");
    }
    default:
      return "Execução concluída.";
  }
}

// ─── RUN ───
function run() {
  // Gather inputs
  const input = {};
  $$("#input-fields input[data-key]").forEach(el => {
    input[el.dataset.key] = parseValue(el.value);
  });

  // Animate button
  const btn = $("run-button");
  btn.classList.remove("running");
  void btn.offsetWidth; // force reflow
  btn.classList.add("running");

  const started = performance.now();

  try {
    let result;
    if (currentLanguage === "javascript") {
      // JS: actually execute the code from the editor
      const code = $("code-editor").value;
      const fn = new Function("input", `${code}\nreturn typeof result === "undefined" ? "" : result;`);
      result = fn(input);
    } else {
      // Java: simulate execution
      result = simulateJava(currentAlgo.id, input);
    }

    const elapsed = (performance.now() - started).toFixed(1);
    const formatted = Array.isArray(result) ? `[${result.join(", ")}]` : String(result);

    $("output").textContent = formatted;
    $("run-time").textContent = `${elapsed} ms`;
    $("run-time").className = "run-time success";

  } catch (error) {
    $("output").textContent = `Erro: ${error.message}`;
    $("run-time").textContent = "falhou";
    $("run-time").className = "run-time error";
  }
}

// ─── NAVIGATION ───
function navigateTo(page) {
  // Close mobile menu
  $("sidebar").classList.remove("open");
  $("overlay").classList.remove("open");

  // Update nav active state
  $$(".nav-btn").forEach(n => {
    n.classList.toggle("active", n.dataset.page === page);
  });

  if (page === "overview") {
    $("overview-page").classList.add("active-page");
    $("workspace-page").classList.remove("active-page");
    $("breadcrumb-current").textContent = "visão geral";
    return;
  }

  // It's a language page
  currentLanguage = page;
  currentAlgo = algorithms[currentLanguage][0];

  $("overview-page").classList.remove("active-page");
  $("workspace-page").classList.add("active-page");
  $("breadcrumb-current").textContent = page === "java" ? "algoritmos java" : "algoritmos javascript";

  renderWorkspace();
}

// ─── EVENT LISTENERS ───

// Navigation buttons (sidebar + overview cards + hero buttons)
document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-page]");
  if (target) {
    e.preventDefault();
    navigateTo(target.dataset.page);
  }
});

// Algorithm tabs
document.addEventListener("click", (e) => {
  if (e.target.matches(".algo-tabs button")) {
    const algo = algorithms[currentLanguage].find(a => a.id === e.target.dataset.id);
    if (algo) {
      currentAlgo = algo;
      renderWorkspace();
    }
  }
});

// Editor: sync line numbers on input
$("code-editor").addEventListener("input", renderLines);
$("code-editor").addEventListener("scroll", function () {
  $("line-numbers").scrollTop = this.scrollTop;
});

// Tab key support in editor
$("code-editor").addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = this.selectionStart;
    const end = this.selectionEnd;
    this.value = this.value.substring(0, start) + "  " + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 2;
    renderLines();
  }
});

// Run button
$("run-button").addEventListener("click", run);

// Reset code
$("reset-code").addEventListener("click", () => {
  $("code-editor").value = currentAlgo.code;
  renderLines();
  resetOutput();
});

// Keyboard shortcut: Ctrl+Enter to run
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
    e.preventDefault();
    run();
  }
});

// Mobile menu
$("mobile-menu-btn").addEventListener("click", () => {
  $("sidebar").classList.toggle("open");
  $("overlay").classList.toggle("open");
});
$("overlay").addEventListener("click", () => {
  $("sidebar").classList.remove("open");
  $("overlay").classList.remove("open");
});

// ─── INIT ───
renderWorkspace();

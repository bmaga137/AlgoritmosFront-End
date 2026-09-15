const prompt = require('prompt-sync')();

function gerarSequenciaFibonacci() {
    const numero = parseInt(prompt("Digite a quantidade de termos para a sequência de Fibonacci: "));

    let sequencia = [0, 1];

    if (numero > 1) {
        for (let i = 2; i < numero; i++) {
            sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
        }
        console.log(sequencia);
        return sequencia
    }
    else {
        console.log("Inserir quantidade acima de 1")
        return null;
    }
}

gerarSequenciaFibonacci();